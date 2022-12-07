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
# 12/08 台中 trend
url = "https://trends.google.com.tw/trends/api/dailytrends?hl=zh-TW&tz=-480&ed=20221208&geo=TW&region=TXG&ns=15"
# url = "https://trends.google.com.tw/trends/explore?date=2022-11-02%202022-11-02&geo=TW-TPQ"
resp = requests.get(url)
# print(resp.text)
data = json.loads(re.sub(r"\)\]\}\',\n", "", resp.text))["default"][
    "trendingSearchesDays"
][0]["trendingSearches"]
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

df = pd.DataFrame(data)
print(df)
