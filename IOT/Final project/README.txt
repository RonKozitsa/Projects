README for final_project_iot

Shuli Finley 329827190
Ron Kozitsa 312544240

We implemented two recommendation engines: 
	1. for students
	2. for MiLab managers / lecturers 

Demo video: https://www.youtube.com/watch?v=xTRVYumJjgQ

Below, we elaborate on the functionalities of both engines.


******************
1. For Students
******************
For students wishing to find the best time to come to the MiLab, there are two options:

1.1 They can "choose" a day, and be provided with a recommendation for which hour is best for that day based on historical data from that day of the week
1.2 They can "find" a day, in which case the engine will simply tell them the best day to go to the lab

What is the "best" day / hour?
We decided to use noise, temperature, and light parameters to judge this. 
We decided to give noise and temperature an equal weight while comparing options, and giving the light parameter a secondary priority (because we can always turn on the lights).

To compare these parameters, first we gather historical data from the desired day.
Then we average all the data per hour. 
(For example, if the day is Thursday and we have data going 5 weeks back, then we avergae for every Thursday the noise, temperature, and light levels at each hour of the day, resulting in one numerical value per hour of the day).
Then we eliminate irrelevant data such as the data for the hours during which the MiLab is closed. 
Then we assign the priorities to the different parameters, and sort accordingly (low temperature, low noise, and high light at the top of the sorting, and high temp, high noise, and low light at the bottom).

We display a sorted list of the times of the day that fall within one standard deviation point of the average noise / temperature of that day, for the user's convenience.
(After familiarizing with the data, this seemed to be a good filter to find "good" hours.)

In the "Find" option, we simply compare that data for all days of the week and choose the day with the best average stats.


***************************************
2. For MiLab Managers / Lecturers
***************************************
For MiLab managers / lecturers, there are three options:

2.1 Find the best time to schedule a meeting in the lab
This is done by comparing the temperature, noise, and light parameters per day over the historical data, and returning the day that statistically has the best "score" (high light and low noise and low temp).
(For the user's convenience, we also display the days that scored highest in each parameter separetly incase the user has higher priority for a specific parameter.)

2.2 Determining whether to turn on the AC
To determine this, we compare the room temperature of the lab and the weather outside with standard room temperature (25), 
and take the season into consideration as well. 
We've had trouble with the temperature sensor, so if the data isn't available, 
we base the recommendation off of the weather API data of the outside temperature and the season alone.

2.3 Choosing a day and getting best time for reception hours
For the reception hours option, we let the user choose which day they are interested in,
and we provide the quietest time of that day based on historical data.


****************
Final remarks:
****************

Some of the functionalities don't display full data because the "thing" doesn't have historical data. 
We hope the video clearly enough demonstrates the capabilities and thoughtfulness behind our implementation.
We did our best to adhere to the most recent version / clarification of the assignment.
Thanks for a great course!





:)