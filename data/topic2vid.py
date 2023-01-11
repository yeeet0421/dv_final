import json

fileName = '烏克蘭'
with open(fileName + '_vid_sentiment.json', encoding='utf8') as jsonfile:
    vid_data = json.load(jsonfile)
with open(fileName + '_vid_topic_without_tags.json', encoding='utf8') as jsonfile:
    topic_data = json.load(jsonfile)

output_data = {}
for topic in topic_data:
    vid_weight = {}
    for video in vid_data:
        if topic['text'] in vid_data[video]['topic']:
            vid_weight[video] = vid_data[video]['topic'][topic['text']]

    vid_weight = {k: v for k, v in sorted(vid_weight.items(), key=lambda item: item[1], reverse=True)}
    output_data[topic['text']] = []
    for i, k in enumerate(vid_weight):
        output_data[topic['text']].append(k)
        if i == 3:
            break

with open(fileName + '_topic4vid.json', 'w', encoding='utf8') as jsonfile:
    json.dump(output_data, jsonfile, indent=4, ensure_ascii=False)