import re
import json
import requests
import pandas as pd
from bs4 import BeautifulSoup
import datetime

"""
{
    '台中': 'TXG',
    '台北': 'TPE',
    '台南': 'TNN',
    '桃園': 'TAO',
    '高雄': 'KHH',
    '新北': 'TPQ'
}
"""
# # 點"搜尋趨勢"
# # 12/09 台中 每日搜尋趨勢
# url = "https://trends.google.com.tw/trends/api/dailytrends?hl=zh-TW&tz=-480&ed=20221209&geo=TW&region=TXG&ns=15"
# resp = requests.get(url)
# print(resp.text)
# data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"][
#     "trendingSearchesDays"
# ][0]["trendingSearches"]

## ******************************************* ##
# # 點 "探索"
# # 12/02 台中 熱門主題
# url = "https://trends.google.com.tw/trends/api/widgetdata/relatedsearches?hl=zh-TW&tz=-480&req=%7B%22restriction%22:%7B%22geo%22:%7B%22region%22:%22TW-TXG%22%7D,%22time%22:%222022-12-02+2022-12-02%22,%22originalTimeRangeForExploreUrl%22:%222022-12-02+2022-12-02%22%7D,%22keywordType%22:%22ENTITY%22,%22metric%22:%5B%22TOP%22,%22RISING%22%5D,%22trendinessSettings%22:%7B%22compareTime%22:%222022-12-01+2022-12-01%22%7D,%22requestOptions%22:%7B%22property%22:%22%22,%22backend%22:%22IZG%22,%22category%22:0%7D,%22language%22:%22zh%22,%22userCountryCode%22:%22TW%22,%22userConfig%22:%7B%22userType%22:%22USER_TYPE_LEGIT_USER%22%7D%7D&token=APP6_UEAAAAAY5THL4k65mIAgwAF90B-8i8931zczBwF"
# resp = requests.get(url)
# print(resp.text)
# data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"]["rankedList"][1][
#     "rankedKeyword"
# ]

# 12/02 台中 熱門搜尋
url = "https://trends.google.com.tw/trends/api/widgetdata/relatedsearches?hl=zh-TW&tz=-480&req=%7B%22restriction%22:%7B%22geo%22:%7B%22region%22:%22TW-TXG%22%7D,%22time%22:%222022-12-02+2022-12-02%22,%22originalTimeRangeForExploreUrl%22:%222022-12-02+2022-12-02%22%7D,%22keywordType%22:%22ENTITY%22,%22metric%22:%5B%22TOP%22,%22RISING%22%5D,%22trendinessSettings%22:%7B%22compareTime%22:%222022-12-01+2022-12-01%22%7D,%22requestOptions%22:%7B%22property%22:%22%22,%22backend%22:%22IZG%22,%22category%22:0%7D,%22language%22:%22zh%22,%22userCountryCode%22:%22TW%22,%22userConfig%22:%7B%22userType%22:%22USER_TYPE_LEGIT_USER%22%7D%7D&token=APP6_UEAAAAAY5THL4k65mIAgwAF90B-8i8931zczBwF"
resp = requests.get(url)
print(resp.text)
data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"]["rankedList"][1][
    "rankedKeyword"
]

# # 12/09 台中 trend 世足賽程 過去30天趨勢line chart
# url = "https://trends.google.com.tw/trends/api/widgetdata/multiline?hl=zh-TW&tz=-480&req=%7B%22time%22:%222022-11-09+2022-12-09%22,%22resolution%22:%22DAY%22,%22locale%22:%22zh-TW%22,%22comparisonItem%22:%5B%7B%22geo%22:%7B%22region%22:%22TW-TXG%22%7D,%22complexKeywordsRestriction%22:%7B%22keyword%22:%5B%7B%22type%22:%22BROAD%22,%22value%22:%22%E4%B8%96+%E8%B6%B3+%E8%B3%BD%E7%A8%8B%22%7D%5D%7D%7D%5D,%22requestOptions%22:%7B%22property%22:%22%22,%22backend%22:%22IZG%22,%22category%22:0%7D,%22userConfig%22:%7B%22userType%22:%22USER_TYPE_LEGIT_USER%22%7D%7D&token=APP6_UEAAAAAY5TALd7X-f6F_iSunA3xG55ZjuvkvhtH&tz=-480"
# resp = requests.get(url)
# print(resp.text)
# data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"]["timelineData"]

# # 12/09 台中 trend 世足賽程 各個城市過去30天趨勢
# url = "https://trends.google.com.tw/trends/api/widgetdata/comparedgeo?hl=zh-TW&tz=-480&req=%7B%22geo%22:%7B%22region%22:%22TW-TXG%22%7D,%22comparisonItem%22:%5B%7B%22time%22:%222022-11-09+2022-12-09%22,%22complexKeywordsRestriction%22:%7B%22keyword%22:%5B%7B%22type%22:%22BROAD%22,%22value%22:%22%E4%B8%96+%E8%B6%B3+%E8%B3%BD%E7%A8%8B%22%7D%5D%7D%7D%5D,%22resolution%22:%22CITY%22,%22locale%22:%22zh-TW%22,%22requestOptions%22:%7B%22property%22:%22%22,%22backend%22:%22IZG%22,%22category%22:0%7D,%22userConfig%22:%7B%22userType%22:%22USER_TYPE_LEGIT_USER%22%7D%7D&token=APP6_UEAAAAAY5TCb3p2_2SCBMg87fv5D9wczniNv4j2"
# resp = requests.get(url)
# print(resp.text)
# data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"]["geoMapData"]

# # 12/09 台中 trend 世足賽程 相關搜尋
# url = "https://trends.google.com.tw/trends/api/widgetdata/relatedsearches?hl=zh-TW&tz=-480&req=%7B%22restriction%22:%7B%22geo%22:%7B%22region%22:%22TW-TXG%22%7D,%22time%22:%222022-11-09+2022-12-09%22,%22originalTimeRangeForExploreUrl%22:%22today+1-m%22,%22complexKeywordsRestriction%22:%7B%22keyword%22:%5B%7B%22type%22:%22BROAD%22,%22value%22:%22%E4%B8%96+%E8%B6%B3+%E8%B3%BD%E7%A8%8B%22%7D%5D%7D%7D,%22keywordType%22:%22ENTITY%22,%22metric%22:%5B%22TOP%22,%22RISING%22%5D,%22trendinessSettings%22:%7B%22compareTime%22:%222022-10-09+2022-11-08%22%7D,%22requestOptions%22:%7B%22property%22:%22%22,%22backend%22:%22IZG%22,%22category%22:0%7D,%22language%22:%22zh%22,%22userCountryCode%22:%22TW%22,%22userConfig%22:%7B%22userType%22:%22USER_TYPE_LEGIT_USER%22%7D%7D&token=APP6_UEAAAAAY5TCb-LXJPt1Yr_pUbuLKgH5jBDjbYO4"
# resp = requests.get(url)
# print(resp.text)
# data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"]["rankedList"][1][
#     "rankedKeyword"
# ]

# with open("data.json", "w", encoding="utf-8") as f:
#     json.dump(data, f, ensure_ascii=False, indent=4)

df = pd.DataFrame(data)
print(df)
