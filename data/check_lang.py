import json
import pycld2 as cld2

for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
    f = open(keyword+'_search.json')
    data = json.load(f)
    tmp = {}
    for i in data['items']:
        try:
            vid = i['id']['videoId']
            # print(cld2.detect((i['snippet']['title'])))
            if cld2.detect(i['snippet']['title'])[2][0][0] == 'ChineseT':
                if vid in tmp:
                    continue
                else:
                    tmp[vid] = i
        except:
            a = 1
    print(len(tmp))
    with open(keyword+'_search.json', 'w', encoding='utf-8') as f:
            json.dump(tmp, f, ensure_ascii=False, indent=4)