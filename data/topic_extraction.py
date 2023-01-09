import jieba
import jieba.analyse
import json

fileName = '烏克蘭'
titleK = 5
descriptionK = 5
topK = 50
with open(fileName + '_vid.json', encoding='utf8') as jsonfile:
    data = json.load(jsonfile)

keyword = {}
for video in data:
    # title
    title = data[video]['items'][0]['snippet']['title']
    for k, w in jieba.analyse.textrank(title, topK=titleK, withWeight=True, allowPOS=('ns','n','vn','v','nr')):
        if k in keyword:
            keyword[k] += w
        else:
            keyword[k] = w

    # description
    description = data[video]['items'][0]['snippet']['description']
    for k, w in jieba.analyse.textrank(description, topK=descriptionK, withWeight=True, allowPOS=('ns','n','vn','v','nr')):
        if k in keyword:
            keyword[k] += w
        else:
            keyword[k] = w
    
    # tags
    if 'tags' in data[video]['items'][0]['snippet']:
        tags = title = data[video]['items'][0]['snippet']['tags']
        for ks in tags:
            for k in ks.split():
                if k in keyword:
                    keyword[k] += 0.5
                else:
                    keyword[k] = 0.5

keyword = {k: v for k, v in sorted(keyword.items(), key=lambda item: item[1], reverse=True)}
_ = []
for i, (k, v) in enumerate(keyword.items()):
    _.append({'text': k, 'value': v})
    if i == 50:
        break
with open(fileName + '_vid_topic_with_tags.json', 'w', encoding='utf8') as output:
    json.dump(_, output, indent=4, ensure_ascii=False)
