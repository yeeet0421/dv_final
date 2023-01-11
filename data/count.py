import json
with open('channelInfo.json', encoding='utf8') as jsonfile:
    data = json.load(jsonfile)
cnt = 0
for v in data:
    cnt += 1

print(cnt)
