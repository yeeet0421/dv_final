import json
import random

# f = open('demo_playVid.json')
# plays = json.load(f)
# vid_list = []
# for i in plays:
#     vid_list.extend(random.choices(plays[i],k=min(1000, len(plays[i]))))
# print(len(vid_list))
# dict_ = {}
dict_ = {'世足賽': ['世足賽', '台灣'], '疫情':['中心', '疫苗']}
outt = {}
for keyword in ['世足賽', '疫情']:
    outt[keyword] = {}
    f = open(keyword+'_topic4vid.json')
    vids = json.load(f)
    for word in dict_[keyword]:
        # outt[keyword][word] = 0
        # print(vids[word])
        outt[keyword][word] = vids[word]
    # f = open(keyword+'_vid_sentiment.json')
    # vids = json.load(f)
    # num = 0
    # dict_[keyword] = words
with open('topic_vid.json', 'w', encoding='utf-8') as f:
    json.dump(outt, f, ensure_ascii=False, indent=4)
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