import json
import random

# f = open('demo_playVid.json')
# plays = json.load(f)
# vid_list = []
# for i in plays:
#     vid_list.extend(random.choices(plays[i],k=min(1000, len(plays[i]))))
# print(len(vid_list))
dict_ = {}
for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
    
    f = open(keyword+'_vid_topic_without_tags.json')
    words = json.load(f)
    # f = open(keyword+'_vid_sentiment.json')
    # vids = json.load(f)
    # num = 0
    dict_[keyword] = words
with open('cloud.json', 'w', encoding='utf-8') as f:
    json.dump(dict_, f, ensure_ascii=False, indent=4)
    # for word in words:
    #     print(word)
    #     if len(words[word]) != 0:
    #         for vid in words[word]:
    #             print(vids[vid]['avg_sentiment'])
    #         # print(len(words[word]))
    # print(num) 
    # print("++++++++++++++++++++++++++++++++++")
    # play = []
    # for chan in data:
    #     play.append(data[chan]['items'][0]['contentDetails']['relatedPlaylists']['uploads'])
    # print(len(play))
# print(play)