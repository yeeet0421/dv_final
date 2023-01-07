import csv 
import pandas as pd
import json 

def csv_to_json(line_json, keyword):
    data = pd.read_csv(keyword + '.csv')
    date = data['date'].tolist()
    date = [i.split('-', 1)[1] for i in date]
    val = data['val'].tolist()
    val = [0 if i == '<1' else int(i) for i in val]
    line_json[keyword] = {}
    line_json[keyword]['line'] = {}
    line_json[keyword]['line']['google'] = {}
    line_json[keyword]['line']['google']['labels'] = date
    line_json[keyword]['line']['google']['val'] = val
    return line_json, date

def vid_line(line_json, keyword, date):
    f = open(keyword+'_vid.json')
    vid_data = json.load(f)
    vid_line = dict.fromkeys(date, 0)

    for i in vid_data:
        # 可能要先過濾掉非中文影片喔
        vid_date = vid_data[i]['items'][0]['snippet']['publishedAt'].split('T')[0].split('-', 1)[1]
        month, day = vid_date.split('-')[0], vid_date.split('-')[1]
        if int(month) == 12 and int(day) >= 25:
            vid_line['12-25'] = vid_line['12-25'] + 1
        elif vid_date in vid_line:
            vid_line[vid_date] = vid_line[vid_date] + 1
        else:
            f_ = filter(lambda x: x > vid_date, date) #This stores elements that are smaller than a in a filter object
            num = min(f_)
            vid_line[num] = vid_line[num] + 1
    val = list(vid_line.values())
    line_json[keyword]['line']['youtube'] = {}
    line_json[keyword]['line']['youtube']['labels'] = date
    line_json[keyword]['line']['youtube']['val'] = val
    print(sum(val))
    return line_json

if __name__ == "__main__":
    line_json = {}
    for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
        line_json, date = csv_to_json(line_json, keyword)
    for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
        vid_line(line_json, keyword, date)
    with open('./line.json', 'w', encoding='utf-8') as f:
            json.dump(line_json, f, ensure_ascii=False, indent=4)
