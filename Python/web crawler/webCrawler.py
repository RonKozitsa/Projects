import requests
from bs4 import BeautifulSoup

def pageCrawl(max_pages):
    page = 1
    while page <= max_pages:
        url = "https://www.ebay.com/sch/i.html?_from=R40&_nkw=dogs+toys&_sacat=1&_pgn=" + str(page)
        source_code = requests.get(url)
    # gets what we need (removes all the crap)
        plain_text = source_code.text
    # convert into a 'beautiful soup' Object
        soupObject = BeautifulSoup(plain_text)
    # go through the source code and get all the links that are of class 's-item__title'
        for link in soupObject.find_all('a', {'class', 's-item__link'}):
    # print the link of the item
            href = link.get('href')
            get_data_from_link(href)
            print(href)
            page += 1


def get_data_from_link(link):
    source_code = requests.get(link)
    # gets what we need (removes all the crap)
    plain_text = source_code.text
    # convert into a 'beautiful soup' Object
    soupObject = BeautifulSoup(plain_text)
    for name in soupObject.find_all('h1', {'class', 'it-ttl'}):
        # print the name of the item
        print(name.get_text()[16:])


pageCrawl(1)

