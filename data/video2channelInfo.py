import json

# get the video id for the 4 * 4(世足賽, 台灣, 中心, 疫苗) demo video
# 可以存成'videoId':{'channel_chart':{種類名字:[], viewcount:[], 影片:[]}}嗎
output = {}
with open('世足賽_topic4vid.json', encoding='utf8') as f:
    vid_data = json.load(f)
    for vid in vid_data['世足賽']:
        output[vid] = {'keyword': '世足賽', 'subKeyword': '世足賽'}
    for vid in vid_data['台灣']:
        output[vid] = {'keyword': '世足賽', 'subKeyword': '台灣'}

with open('疫情_topic4vid.json', encoding='utf8') as f:
    vid_data = json.load(f)
    for vid in vid_data['中心']:
        output[vid] = {'keyword': '疫情', 'subKeyword': '中心'}
    for vid in vid_data['疫苗']:
        output[vid] = {'keyword': '疫情', 'subKeyword': '疫苗'}

# get the channel id using video id
with open('世足賽_vid.json', encoding='utf8') as f:
    vid_data = json.load(f)
    for vid in output:
        if output[vid]['keyword'] == '世足賽':
            output[vid]['channelId'] = vid_data[vid]['items'][0]['snippet']['channelId']
with open('疫情_vid.json', encoding='utf8') as f:
    vid_data = json.load(f)
    for vid in output:
        if output[vid]['keyword'] == '疫情':
            output[vid]['channelId'] = vid_data[vid]['items'][0]['snippet']['channelId']

# get the channel infomation (categories, viewcount, videocount)
with open('channelInfo.json', encoding='utf8') as f:
    channel_data = json.load(f)

for vid in output:
    output[vid]['channel_chart'] = channel_data[output[vid]['channelId']]['channel_chart']

with open('vid2channel.json', 'w', encoding='utf8') as f:
    json.dump(output, f, indent=4, ensure_ascii=False)
