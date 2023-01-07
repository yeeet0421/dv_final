# 放一些我測試的小垃圾

import json

for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
    f = open(keyword + '_comment.json')
    data = json.load(f)
    vids_info = data.keys()
    print(len(vids_info))