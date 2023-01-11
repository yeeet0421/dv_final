import json

for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
    f = open(keyword+'_playVid.json')
    data = json.load(f)
    num = 0
    for i in data:
        if len(data[i]) != 0:
            num += 1
            print(len(data[i]))
    print(num)
print("++++++++++++++++++++++++++++++++++")
    # play = []
    # for chan in data:
    #     play.append(data[chan]['items'][0]['contentDetails']['relatedPlaylists']['uploads'])
    # print(len(play))
# print(play)