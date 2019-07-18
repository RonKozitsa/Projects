from elasticsearch import Elasticsearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth
import requests
import pytemperature
import datetime
from datetime import date
import pandas as pd
import numpy as np
from pandas.io.json import json_normalize

region = 'eu-west-1'
ACCESS_ID = "fake id"
SECRET_KEY = "fake id"

host = 'search-idc-7dyp7fwnklhj22hwzpuoa5hgsy.eu-west-1.es.amazonaws.com'
awsauth = AWS4Auth(ACCESS_ID ,SECRET_KEY , region, 'es')

APPID_API_KEY = 'fake key'
CITY_QUERY = 'Herzliyya'
WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'

response = requests.get(WEATHER_API_URL, {'q': CITY_QUERY, 'appid': APPID_API_KEY})
response_json = response.json()
today_temp_in_cls = int(pytemperature.k2c(response_json['main']['temp']))


es = Elasticsearch(
    hosts=[{'host': host, 'port': 443}],
    http_auth=awsauth,
    use_ssl=True,
    verify_certs=True,
    connection_class=RequestsHttpConnection
)


week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
Y = 2000 # dummy leap year to allow input X-02-29 (leap day)
seasons = [('winter', (date(Y,  1,  1),  date(Y,  3, 20))),
           ('spring', (date(Y,  3, 21),  date(Y,  6, 20))),
           ('summer', (date(Y,  6, 21),  date(Y,  9, 22))),
           ('autumn', (date(Y,  9, 23),  date(Y, 12, 20))),
           ('winter', (date(Y, 12, 21),  date(Y, 12, 31)))]
ROOM_TEMP = 25
TODAY = datetime.datetime.today()

time_format = '%Y/%m/%d %H:%M:%S'

def convertDateToOpeningHours(date):
    return date[:11] + '07:00:00'

def convertDateToClosingHours(date):
    return date[:11] + '20:00:00'

# function returns data from timeframe given as parameters
def getRelevantQuery(time_from, time_to):
    return {
        "from": 0 , "size": 10000,
        "query": {
            "bool": {
                "filter" : {
                    "range": {
                        "time": {
                            "gte": time_from,
                            "lt": time_to
                        }
                    }
                }
            }
        },
        'aggs': {
            'average_light': {
                'avg': {
                    'field': 'light',
                }
            },
            "max_light": {
                'max': {
                    'field': 'light'
                }
            },
            'average_noise': {
                'avg': {
                    'field': 'noise'
                }
            },
            "max_noise" : {
                'max': {
                    'field': 'noise'
                }
            },
            "average_temp" : {
                'avg': {
                    'field': 'temperature'
                }
            },
            "max_temp" : {
                'max': {
                    'field': 'temperature'
                }
            },
        }
    }

#
def getTenLastWeeks(day):
    days = []
    i = 0
    daysToGoBack = 7
    while i < 10:
        weekAgo = datetime.datetime.strptime(day,time_format) - datetime.timedelta(days=daysToGoBack)
        weekAgo = weekAgo.strftime(time_format)
        days.append(weekAgo)
        daysToGoBack += 7
        i += 1
    return days

def getLast30MinData():
    last_30_min = getRelevantQuery('now-30m', 'now')
    last_30_min_avgs = es.search(index='final_ron_shuli', body=last_30_min)['aggregations']
    return last_30_min_avgs


def getQueryResultsForWeeks(weeks):
    results = []
    for i in range(len(weeks)):
        body = getRelevantQuery(convertDateToOpeningHours(weeks[i]), convertDateToClosingHours(weeks[i]))
        results.append(es.search(index='final_ron_shuli', body=body)['aggregations'])
        i += 1
    return results

def getAvergaesOfSpecificDay(results):
    lightAverage = 0
    noiseAverage = 0
    tempAverage = 0
    max_light = 0
    max_noise = 0
    max_temp = 0
    total = len(results)
    for i in range(len(results)):
        if results[i]['average_light']['value'] is not None:
            lightAverage += results[i]['average_light']['value']
        if results[i]['average_noise']['value'] is not None:
            noiseAverage += results[i]['average_noise']['value']
        if results[i]['max_noise']['value'] is not None:
            max_noise = max(results[i]['max_noise']['value'], max_noise)
        if results[i]['max_light']['value'] is not None:
            max_light = max(results[i]['max_light']['value'], max_light)
        if results[i]['average_temp']['value'] is not None:
            tempAverage += results[i]['average_temp']['value']
        if results[i]['max_temp']['value'] is not None:
            max_temp = max(results[i]['max_temp']['value'], max_temp)
    noiseAverage /= total
    lightAverage /= total
    tempAverage /= total
    return lightAverage,noiseAverage ,tempAverage, max_light, max_noise, max_temp

def analyizeScores(scores):
    best_light = scores[0][0]
    best_noise = scores[0][1]
    best_temp = 10000
    best_light_day = 0
    best_noise_day = 0
    best_temp_day = 0
    today = datetime.datetime.today().weekday()
    is_saturday_or_friday = (today == 4 or today == 5)

    for i in range(len(scores)):
        if best_light < scores[i][0] or is_saturday_or_friday:
            weekday = (datetime.datetime.today() - datetime.timedelta(days=i)).weekday()
            if weekday != 4 and weekday != 5: # ignore friday and saturday
                best_light_day = i
                best_light = scores[i][0]
        if best_noise > scores[i][1] or is_saturday_or_friday:
            weekday = (datetime.datetime.today() - datetime.timedelta(days = i)).weekday()
            if weekday != 4 and weekday != 5 : # ignore friday and saturday
                best_noise_day = i
                best_noise = scores[i][1]
        if abs(ROOM_TEMP - scores[i][2]) < best_temp or is_saturday_or_friday:
            weekday = (datetime.datetime.today() - datetime.timedelta(days = i)).weekday()
            if weekday != 4 and weekday != 5 : # ignore friday and saturday
                best_temp_day = i
                best_temp = scores[i][2]
                is_saturday_or_friday = False

    best_temp_day = (datetime.datetime.today() - datetime.timedelta(days = best_temp_day)).weekday()
    best_light_day = (datetime.datetime.today() - datetime.timedelta(days = best_light_day)).weekday()
    best_noise_day = (datetime.datetime.today() - datetime.timedelta(days = best_noise_day)).weekday()
    return {"day with lots of light": week_days[best_light_day], "most quite day" : week_days[best_noise_day], "day with best temperature" : week_days[best_temp_day]}


def getBestDayToComeToLab():
    i = 1
    today = datetime.datetime.today()
    day = today
    days_scores = []
    while i < 8:
        weeks = getTenLastWeeks(day.strftime(time_format))
        results = getQueryResultsForWeeks(weeks)
        avg_light, avg_noise, avg_temp, max_light, max_noise, max_temp= getAvergaesOfSpecificDay(results)
        day_array = [avg_light,avg_noise, avg_temp, max_noise,max_light, max_temp]
        days_scores.append(day_array)
        day = today - datetime.timedelta(days = i);
        i += 1
    analyized = analyizeScores(days_scores)
    if analyized['day with lots of light'] == analyized['most quite day'] == analyized['day with best temperature']:
        return {
            'message': 'best day is : ' + analyized['day with lots of light'],
            'days' : [analyized['day with lots of light']]
        }
    else:
        return {
            'message': analyized,
            'days' : [analyized['day with lots of light'], analyized['most quite day'], analyized['day with best temperature']],
        }

def get_season(now):
    if isinstance(now, datetime.datetime):
        now = now.date()
    now = now.replace(year=Y)
    return next(season for season, (start, end) in seasons
                if start <= now <= end)

def shouldYouTurnOnTheAC():
    season = get_season(date.today())
    isHot = today_temp_in_cls > ROOM_TEMP
    current_temp_data = getLast30MinData()['average_temp']['value']
    if current_temp_data is not None:
        labIsHot = current_temp_data >= ROOM_TEMP
        if season == 'summer':
            if isHot and labIsHot:
                return 'Yes - turn it on cooling, its a bit hot today ({0} degrees) and it is {1} degrees in the lab now'.format(today_temp_in_cls, current_temp_data)
        if season == 'winter':
            if isHot and labIsHot:
                return 'Maybe - its pretty hot today ({0} degrees) and also the lab is pretty warm ({1} degrees), but its winter ya know '.format(today_temp_in_cls,current_temp_data)
        else:
            return 'No - The lab feels really nice in this lovely {2} ! its {0} degrees outside , current temp in lab is {1}'.format(today_temp_in_cls, current_temp_data, season)
    else:
        print('Sorry, we cannot get data from elastic, but todays weather is {} degrees'.format(today_temp_in_cls))

def getBestTimeOfDayAccordingToNoise(date):
    times = []
    weeks = getTenLastWeeks(date)
    for i in range(len(weeks)):
        time = getBestTimeForDay(weeks[i])
        if time != -1:
            times.append(time)
    times = np.array(times)
    if len(times) > 0:
        return 'Most quite time for reception hours according to analysis of data is around : ' + str(np.average(times))
    else :
        print('couldnt find historical data to be based on, looking on todays values to give recommendation for today')
        result = getBestTimeForDay(TODAY.strftime(time_format))
        if result == -1:
            print('Sorry, could not get data')
        else:
            return 'Most quite time to come TODAY is : {}'.format(result)

def getBestTimeForDay(day):
    body = getRelevantQuery(convertDateToOpeningHours(day), convertDateToClosingHours(day))
    df = json_normalize(es.search(index='final_ron_shuli', body=body)['hits']['hits'])

    try:
        df = df.drop(['_id', '_index', '_score', '_source.acc-x', '_source.acc-y',
                      '_source.acc-z', '_source.fire', '_source.name',
                      '_source.proximity','_source.light', '_type'], axis=1)

        new_dates, new_times = zip(*[(d.split()[0], d.split()[1].split(':')[0]) for d in df['_source.time']])
        df = df.assign(new_date=new_dates, new_time=new_times)

        df['new_date'] = pd.to_datetime(df['new_date'], format="%Y/%m/%d")

        df['Day of week (int)'] = df['new_date'].dt.weekday

        df['Day of week'] = df['new_date'].dt.day_name()

        df = df.drop(['_source.time', 'Day of week (int)'], axis=1)

        groups = ['Day of week', 'new_time']

        g = df.groupby(groups, as_index=False).mean()
        g = g[(g['_source.noise'] > 1)]
        print('found data for {}'.format(day))
        return g['_source.noise'].idxmin() + 8
    except:
        print('no data available in this date - {}'.format(day))
        return -1


def getFullDayAnalysisWithSystemRecommendations(day = ''):
    # take data from last month into dataframe for data analysis
    last_month = getRelevantQuery('now-30d', 'now')
    df = json_normalize(es.search(index='final_ron_shuli', body=last_month)['hits']['hits'])
    # we are interested in temperature, light, and noise so we remove the other data to speed up operations
    df = df.drop(['_id', '_index', '_score', '_source.acc-x', '_source.acc-y',
                  '_source.acc-z', '_source.fire', '_source.name', 
                  '_source.proximity', '_source.message','_type'], axis=1)

    # convert split the timestamp into date and time columns
    # for the time column, we only need the hour since we will average per hour for our recommendations
    new_dates, new_times = zip(*[(d.split()[0], d.split()[1].split(':')[0]) for d in df['_source.time']])
    df = df.assign(new_date=new_dates, hour=new_times)

    # convert hours to numeric values for comparison purposes
    df['hour'] = pd.to_numeric(df['hour'])

   
    df['new_date'] = pd.to_datetime(df['new_date'], format="%Y/%m/%d")
    df['Day of week (int)'] = df['new_date'].dt.weekday
    df['Day of week'] = df['new_date'].dt.day_name()
    df = df.drop(['_source.time', 'new_date', 'Day of week (int)'], axis=1)


    # at this point, out columns are: noise, temperature, day of the week, and hour (hours)
    print('****')
    # we construct dataframes for each of the desired parameters: noise, temperature, and light
    # to separately calculate their means per hour per day
    df_noise = df.drop(['_source.temperature', '_source.light'], axis=1)
    df_noise = df_noise.dropna()

    # we used a weather api for our recommendation engine
    df_temperature = df.drop(['_source.noise', '_source.light'], axis=1)
    df_temperature = df_temperature.dropna()
    
    df_light = df.drop(['_source.temperature', '_source.noise'], axis=1)
    df_light = df_light.dropna()

    groups = ['Day of week', 'hour']
    # in order to account for class schedules throughout the week, we calculate the averages per hour per day of the week
    result_noise = df_noise.groupby(groups, as_index=False).mean()
    result_temperature = df_temperature.groupby(groups, as_index=False).mean()
    result_light = df_light.groupby(groups, as_index=False).mean()


    results_combined = result_noise
    results_combined['_source.temperature'] = result_temperature['_source.temperature']
    results_combined['_source.light'] = result_light['_source.light']


    if not day:
        # ask the user what day they would like to come to the lab
        text = input("What day of the week would you like to come into the lab? (i.e., type Monday): ")
        print()
        while text not in week_days:
            text = input('Sorry, invalid input. try again')

    else:
        text = day
    # filter hours by input day and openning hours before calculating results
    that_day = results_combined['Day of week'] == text
    after_openning = results_combined['hour'] > 7
    before_closing = results_combined['hour'] < 20
    eligible_hours = results_combined[that_day & after_openning & before_closing].drop(['Day of week'], axis=1)

    if not eligible_hours.empty:

        print('These are the opening hours for ' + text + ' and their respective information:')
        print(eligible_hours)
        print()
        
        average_of_day_N = eligible_hours.loc[:, '_source.noise'].mean()
        std_of_day_N = eligible_hours.loc[:, '_source.noise'].std()

        print(f'Average noise levels for that day are: {average_of_day_N:.2f}')
        print(f'Standard deviation from average noise levels that day is: {std_of_day_N:.2f}')

        average_of_day_T = eligible_hours.loc[:, '_source.temperature'].mean()
        std_of_day_T = eligible_hours.loc[:, '_source.temperature'].std()

        print(f'Average temperature for that day is: {average_of_day_T:.2f}')
        print(f'Standard deviation from average temperature that day is: {std_of_day_T:.2f}')
        print()

        average_of_day_L = eligible_hours.loc[:, '_source.light'].mean()
        std_of_day_L = eligible_hours.loc[:, '_source.light'].std()

        print(f'Average light for that day is: {average_of_day_L:.2f}')
        print(f'Standard deviation from average light that day is: {std_of_day_L:.2f}')
        print()
        # we recommend hours that are less than 1 standard deviation point less noisey and less hot
        good_hours_Noise = results_combined['_source.noise'] <= (average_of_day_N + std_of_day_N)
        good_hours_Temp = results_combined['_source.temperature'] <= (average_of_day_T + std_of_day_T)
        good_hours_Light = results_combined['_source.light'] <= (average_of_day_L + std_of_day_L)

        results_combined.rename(columns={'_source.noise': 'noise',
                                                               '_source.temperature': 'temperature',
                                                               '_source.light': 'light'}, inplace=True)
        
        # here we are giving equal weight to noise and temperature in the sorting,
        # and then a secondary (lesser) weight to light (because u can always turn lights on:) )
        results_combined['Rank'] = results_combined.noise.rank() + results_combined.temperature.rank()
                                                
        
        recommendation = results_combined[that_day & after_openning & before_closing 
        & good_hours_Noise & good_hours_Temp & good_hours_Light].sort_values(by=
         ['Rank', 'light'], ascending=[True, False]).drop('Rank',axis=1)

        # recommendation = good_hours.sort_values(by=['_source.noise'])
        print('These are the recommended hours for ' + text + ', from (quietest, coolest, and lightest) to (noisiest, warmest, and darkest).')
        print('Note that in the sorting, temperature and noise were given the same weight, and light was given a lesser weight.')
        print('This is because you can always turn the lights on if it\'s too dark :)')

        print(recommendation)
    else:
        print('Sorry, we have an error with getting data for {}, please talk to administrator'.format(text))



def runSystemRecommender():
    validInput = ['Choose', 'Find']
    valid_options = ['1', '2', '3']
    text = input('Hello and welcome to MRS (Milab Mecommendation System) ! Here are your option:\n1. I am a student\n2. I am a lab manager\n3. What is this system about?\n')
    while text not in valid_options:
        text = input('Sorry, invalid input. (type: 1 / 2 / 3)\n')

    if text == '1':
        text = input("Would you like us to find you the best day to come to the lab, or would you rather choose your own day?\n"
                     "type: Choose / Find \n")
        while text not in validInput:
            text = input('Sorry, invalid input. (type: Choose / Find)\n')
        if text == 'Choose':
            getFullDayAnalysisWithSystemRecommendations()
        else:
            print('Looking for best day ...')
            result = getBestDayToComeToLab()
            print(result['message'])
            for day in result['days']:
                print(getFullDayAnalysisWithSystemRecommendations(day))
    elif text =='2':
        text = input("What would you like to know ?\nOptions :\n1. Best day and time to make a meeting\n2.Should I turn on the AC ?\n3.Choose a day and get best time for reception hours\n"
                     "type: 1 / 2 / 3\n ")
        while text not in valid_options:
            text = input('Sorry, invalid input. (type: 1 / 2 / 3)\n')

        if text == '1':
            print('looking for best day...')
            result = getBestDayToComeToLab()
            print(result['message'])
            for day in result['days']:
                print(getFullDayAnalysisWithSystemRecommendations(day))

        elif text == '2':
            print(shouldYouTurnOnTheAC())

        else:
            weekdays_valid = ['0','1','2','3','6']
            text = input("What day do you do the reception hours? We will find you the most QUITE time\nChoose number - 0,1,2,3,6:\n"
                         "Monday: 0       Tuesday:1      Wednesday:2      Thursday: 3      Sunday:6\n(We don't allow weekends)\n")
            while text not in weekdays_valid:
                text = input('Sorry, invalid input. try again')
            diffrenceFromToday = int(text) - datetime.datetime.today().weekday()
            if diffrenceFromToday < 0:
                print(getBestTimeOfDayAccordingToNoise((datetime.datetime.today() - datetime.timedelta(days= -diffrenceFromToday)).strftime(time_format)))
            else:
                print(getBestTimeOfDayAccordingToNoise((datetime.datetime.today() + datetime.timedelta(days= diffrenceFromToday)).strftime(time_format)))
    else :
        about = """Hello ! MRS is a system built by Ron Kozitsa and Shulamit Finley, two computer scince students\n
         The system helps you utilize your use in the Milab, as a student or as a lab manager\n
         MRS uses Elastic search to pull data and analyze the results for you, the system goes back 10 weeks and gets data from the specific day you asked about, and getting you the result
         based on what happened in the last 10 weeks !\n
         Our calculations are based on noise, temperature and light, where temperature and noise has higher weight than light (cause you can always turn on the light).
         So, want to come to the Milab? What are you waiting for ?! Go and ask MRS when to come :)"""
        print(about)





runSystemRecommender()

