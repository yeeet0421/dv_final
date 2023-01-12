import json

fileName = '烏克蘭'
with open(fileName + '_vid_sentiment.json', encoding='utf8') as jsonfile:
    vid_data = json.load(jsonfile)
with open(fileName + '_vid_topic_without_tags.json', encoding='utf8') as jsonfile:
    topic_data = json.load(jsonfile)

output_data = {}
for topic in topic_data:
    vid_weight = {}
    categories = {}
    for video in vid_data:
        if topic['text'] in vid_data[video]['topic']:
            vid_weight[video] = vid_data[video]['topic'][topic['text']]
            if 'topicDetails' not in vid_data[video]['items'][0]:
                continue
            for category in vid_data[video]['items'][0]['topicDetails']['topicCategories']:
                c = category.split('/')[-1]
                if c not in categories:
                    categories[c] = 1
                else:
                    categories[c] += 1

    vid_weight = {k: v for k, v in sorted(vid_weight.items(), key=lambda item: item[1], reverse=True)}
    categories = {k: v for k, v in sorted(categories.items(), key=lambda item: item[1], reverse=True)}
    output_data[topic['text']] = {}
    output_data[topic['text']]['videoId'] = []
    for i, k in enumerate(vid_weight):
        output_data[topic['text']]['videoId'].append(k)
        if i == 3:
            break
    for i, k in enumerate(categories):
        output_data[topic['text']]['topic'] = k
        break
    
with open(fileName + '_topic4vid.json', 'w', encoding='utf8') as jsonfile:
    json.dump(output_data, jsonfile, indent=4, ensure_ascii=False)