import json

f = open('line.json')
data = json.load(f)
for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
    # comment = open(keyword + '_comment.json')
    video = open(keyword + '_vid.json')
    # com = json.load(comment)
    vid = json.load(video)
    vids_info = vid.keys()
    data[keyword]['stat'] = {}
    data[keyword]['stat']['viewCount'] = 0
    data[keyword]['stat']['likeCount'] = 0
    data[keyword]['stat']['comCount'] = 0
    data[keyword]['stat']['vidCount'] = 0
    for vid_ in vids_info:
        # print(vid[vid_]['items'][0]['dataistics'])
        data[keyword]['stat']['viewCount'] += int(vid[vid_]['items'][0]['statistics']['viewCount'])
        try:
            data[keyword]['stat']['likeCount'] += int(vid[vid_]['items'][0]['statistics']['likeCount'])
        except:
            data[keyword]['stat']['likeCount'] += 0
        try:
            data[keyword]['stat']['comCount'] += int(vid[vid_]['items'][0]['statistics']['commentCount'])
        except:
            data[keyword]['stat']['comCount'] += 0
    data[keyword]['stat']['vidCount'] = len(vids_info)
with open('./line.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)