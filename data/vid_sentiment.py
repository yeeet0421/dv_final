import json
fileName = '烏克蘭'
with open(fileName + '_comment_sentiment.json', encoding='utf8') as jsonfile1:
    comment_data = json.load(jsonfile1)
with open(fileName + '_vid.json', encoding='utf8') as jsonfile2:
    vid_data = json.load(jsonfile2)

for video in comment_data:
    sentiments = []
    for id, comment in enumerate(comment_data[video]):
        if 'avg_sentiment' in comment:
            sentiments.append(comment['avg_sentiment'])

    # discard no comments video
    if len(sentiments) is 0:
        del vid_data[video]
        continue

    vid_data[video]['avg_sentiment'] = sum(sentiments) / len(sentiments)

with open(fileName + '_vid_sentiment.json', 'w', encoding='utf8') as output:
    json.dump(vid_data, output, indent=4, ensure_ascii=False)