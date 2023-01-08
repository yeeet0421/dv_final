from snownlp import SnowNLP
import json
fileName = '世足賽'
with open(fileName + '_comment.json', encoding='utf8') as jsonfile:
    data = json.load(jsonfile)

for video in data:
    for id, comment in enumerate(data[video]):
        comment_text = comment['textDisplay']
        # data[video][id]['sentiment_list'] = {}

        if comment_text == "":
            continue
        # traditional Chinese to simplified Chinese
        comment_text = SnowNLP(comment_text).han
        # break down text to sentences
        sentiments = []
        for sent in SnowNLP(comment_text).sentences:
            sentiment = SnowNLP(sent).sentiments
            # data[video][id]['sentiment_list'][sent] = sentiment
            sentiments.append(sentiment)

        # discard none ascii comments
        if len(sentiments) is 0:
            del data[video][id]
            continue

        data[video][id]['avg_sentiment'] = sum(sentiments) / len(sentiments)
        
with open(fileName + '_comment_sentiment.json', 'w', encoding='utf8') as output:
    json.dump(data, output, indent=4, ensure_ascii=False)