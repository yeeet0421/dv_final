# -*- coding: utf-8 -*-

# Sample Python code for youtube.videos.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/code-samples#python

import os

import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

import json

scopes = ['https://www.googleapis.com/auth/youtube.force-ssl']
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

def init(): #initialize authentication
    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "../set/client_secret.json"

    # Get credentials and create an API client
    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    credentials = flow.run_console()
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)
    return youtube

def get_vids_info(youtube, vid): # get video infos
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.

    request = youtube.videos().list(
        part="contentDetails,id,liveStreamingDetails,localizations,player,recordingDetails,snippet,statistics,status,topicDetails",
        id=vid
    )
    response = request.execute()

    return response

def get_comment_threads_each(youtube, nextPageToken, vid, comments):
    # for video in vlist:
    #     vid = video['videoid']
    #     #print("vid = ",vid)
    try:
        results = youtube.commentThreads().list(
            part="id, snippet, replies",#replies
            videoId=vid,
            maxResults=100, # at most 100 comments
            textFormat="plainText" ## or 'html'
            # pageToken = nextPageToken
        ).execute()
        while results: 
            for item in results["items"]:
                if 'snippet' in item:
                    data = {
                        'commentId':item['snippet']['topLevelComment']['id'],
                        'parentId':'0',
                        'videoId':item['snippet']['videoId'],
                        'textDisplay':item['snippet']['topLevelComment']['snippet']['textDisplay'],
                        'publishedAt':item['snippet']['topLevelComment']['snippet']['publishedAt'],
                        'authorDisplayName':item['snippet']['topLevelComment']['snippet']['authorDisplayName'],#
                        #'authorProfileImageUrl':item['snippet']['topLevelComment']['snippet']['authorProfileImageUrl'],#
                        # 'authorChannelId':item['snippet']['topLevelComment']['snippet']['authorChannelId']['value'],
                        'likeCount':item['snippet']['topLevelComment']['snippet']['likeCount']
                    }
                    try:
                        data['authorChannelId']=item['snippet']['topLevelComment']['snippet']['authorChannelId']['value']
                    except:
                        data['authorChannelId']='deleted'
                    # print(data)
                    comments.append(data)
                    # replies = item.get('replies')
                    if item["snippet"]['totalReplyCount'] > 0 and 'replies' in item.keys():
                        tmp = []
                        # reply would be stored backwards
                        for reply in item['replies']['comments']:
                            data = {
                                'commentId':reply['id'],
                                'parentId':reply['snippet']['parentId'],
                                'videoId':reply['snippet']['videoId'],
                                'textDisplay':reply['snippet']['textDisplay'],
                                'publishedAt':reply['snippet']['publishedAt'],
                                'authorDisplayName':reply['snippet']['authorDisplayName'],#
                                #'authorProfileImageUrl':reply['snippet']['authorProfileImageUrl'],#
                                # 'authorChannelId':item['snippet']['topLevelComment']['snippet']['authorChannelId']['value'] or 'deleted',
                                'likeCount':reply['snippet']['likeCount'] #item['snippet']['topLevelComment']['snippet']['likeCount']
                            }
                            try:
                                data['authorChannelId']=item['snippet']['topLevelComment']['snippet']['authorChannelId']['value']
                            except:
                                data['authorChannelId']='deleted'
                            tmp.append(data)
                            # Extract reply
                        tmp_rev = []
                        tmp_rev.append(tmp[::-1])
                        for i in tmp_rev:
                            for j in i:
                                # print(j)
                                comments.append(j)
                            # reply = reply['snippet']['textDisplay']
                            # print(reply)
                            # Store reply is list
                            # replies.append(reply)
            if 'nextPageToken' in results:
                results = youtube.commentThreads().list(
                    part="id, snippet, replies",#replies
                    videoId=vid,
                    maxResults=100, # at most 100 comments
                    textFormat="plainText", ## or 'html'
                    pageToken = results['nextPageToken']
                ).execute()
            else:
                break
        # extracting required info
        # from each result object 
        # return results
    except Exception as e: print(e)
        # print("videoid: ",vid," do not have comments!")
    return comments

def download_comments(youtube, vid):
    
    #videos = pd.read_csv(filename_root+"videos_info.csv")
    #videos_videoids = list(videos['videoid'])
    print(vid)
    comments = []
    comments = get_comment_threads_each(youtube, "", vid, comments)
    if comments:
        #videos_3 = pd.DataFrame(videos_3)
        print('length: ', len(comments))
        return comments
        #videos[i].update({'comment_exist':'T', 'comment_count':len(comments)})
    else:
        print("videoid: ",vid," do not allow/have comments!")
        return []
        #videos[i].update({'comment_exist':'F', 'comment_count':0})

def channel_playlist(youtube, id):
    request = youtube.channels().list(
        part="id, contentDetails",
        id=id
    )
    response = request.execute()
    return response

def get_plays_each(youtube, nextPageToken, id, comments):
    # for video in vlist:
    #     vid = video['videoid']
    #     #print("vid = ",vid)
    try:
        results = youtube.playlistItems().list(
            part="id, snippet",
            maxResults=50,
            playlistId=id
        ).execute()
        while results: 
            for item in results["items"]:
                if 'snippet' in item:
                    # print(data)
                    comments.append(item['snippet']['resourceId']['videoId'])
            if 'nextPageToken' in results:
                results = youtube.playlistItems().list(
                    part="id, snippet",
                    maxResults=50,
                    playlistId=id,
                    pageToken = results['nextPageToken']
                ).execute()
            else:
                break
        # extracting required info
        # from each result object 
        # return results
    except Exception as e: print(e)
        # print("videoid: ",vid," do not have comments!")
    return comments

def play_vidlist(youtube, id):
    print(id)
    vids = []
    vids = get_plays_each(youtube, "", id, vids)
    if vids:
        #videos_3 = pd.DataFrame(videos_3)
        print('length: ', len(vids))
        return vids
        #videos[i].update({'comment_exist':'T', 'comment_count':len(comments)})
    else:
        print("playid: ",id," do not allow/have vids!")
        return []

def main(youtube, keyword, method):

    if method == 'vid':
        f = open(keyword + '_search.json')
        data = json.load(f)
        vids = list(data.keys())
        vids_info = {}
        for vid in vids:
            vids_info[vid] = (get_vids_info(youtube, vid))
        with open(keyword+'_vid.json', 'w', encoding='utf-8') as f:
            json.dump(vids_info, f, ensure_ascii=False, indent=4)
    
    elif method == 'comment':
        f = open(keyword + '_vid.json')
        data = json.load(f)
        coms_dict = {}
        for vid in data:
            # test_vid = 'm14tO5rLIIY'
            comments = download_comments(youtube, vid)
            if len(comments) == 0:
                coms_dict[vid] = {}
            else:
                coms_dict[vid] = comments
        with open(keyword+'_comment.json', 'w', encoding='utf-8') as f:
            json.dump(coms_dict, f, ensure_ascii=False, indent=4)

    elif method == 'channel':
        f = open(keyword+'_vid.json')
        data = json.load(f)
        chan = []
        for vid in data:
            chan.append(data[vid]['items'][0]['snippet']['channelId'])
        chan_list = list(set(chan))
        chan_info = {}
        for chan in chan_list:
            chan_info[chan] = channel_playlist(youtube, chan)
        with open(keyword+'_chanPlay.json', 'w', encoding='utf-8') as f:
            json.dump(chan_info, f, ensure_ascii=False, indent=4)
        # print(":))")

    elif method == 'play':
        f = open(keyword+'_chanPlay.json')
        data = json.load(f)
        plays = []
        for chan in data:
            plays.append(data[chan]['items'][0]['contentDetails']['relatedPlaylists']['uploads'])
        print(len(plays))
        play_info = {}
        for play in plays:
            play_info[play] = play_vidlist(youtube, play)
        with open(keyword+'_playVid.json', 'w', encoding='utf-8') as f:
            json.dump(play_info, f, ensure_ascii=False, indent=4)
        # print(":))")
    
    f.close()

if __name__ == "__main__":
    youtube = init()
    # youtube = 1
    # main(youtube, '1922', 'comment')
    for keyword in ['1922', '世足賽', '地震', '疫情', '烏克蘭']:
        main(youtube, keyword, 'play')