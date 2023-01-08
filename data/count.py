import json
with open('1922_comment.json', encoding='utf8') as jsonfile:
    data = json.load(jsonfile)
cnt = 0
for v in data:
    cnt += len(v)

print(cnt)
with open('1922_test.json', 'w', encoding='utf8') as output:
    json.dump(data, output, indent=4)
