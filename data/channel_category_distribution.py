import json

# get the channel infomation (categories, viewcount, videocount)
# 可以存成'videoId':{'channel_chart':{種類名字:[], viewcount:[], 影片:[]}}嗎
with open('demo_vid.json', encoding='utf8') as f:
    vid_data = json.load(f)

channelInfo = {}
for vid in vid_data:
    channelId = vid_data[vid]['items'][0]['snippet']['channelId']
    if channelId not in channelInfo:
        channelInfo[channelId] = {
            'channel_chart': {
                'categories': [],
                'viewcount': [],
                'videocount': []
            }
        }

    if 'topicDetails' not in vid_data[vid]['items'][0]:
        continue
    categories = []
    for category in vid_data[vid]['items'][0]['topicDetails']['topicCategories']:
        categories.append(category.split('/')[-1])

    viewcount = int(vid_data[vid]['items'][0]['statistics']['viewCount'])

    for category in categories:
        if category not in channelInfo[channelId]['channel_chart']['categories']:
            channelInfo[channelId]['channel_chart']['categories'].append(category)
            channelInfo[channelId]['channel_chart']['viewcount'].append(0)
            channelInfo[channelId]['channel_chart']['videocount'].append(0)
        
        id = channelInfo[channelId]['channel_chart']['categories'].index(category)
        channelInfo[channelId]['channel_chart']['viewcount'][id] += viewcount
        channelInfo[channelId]['channel_chart']['videocount'][id] += 1

with open('channelInfo.json', 'w', encoding='utf8') as f:
    json.dump(channelInfo, f, indent=4, ensure_ascii=False)


    