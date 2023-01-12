import React, {useState} from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import VideoCard from './VideoCard';
import topic_vid from './topic_vid';
const VideoList = ({height, width, setVideoID, trends, trendNumber, keyword, setCardId, cardId}) => {
    if(trends[trendNumber] == '1922' || trends[trendNumber] == '地震'){
        trendNumber = 1
        keyword = '世足賽'
    }
    else if(trends[trendNumber] == '烏克蘭'){
        trendNumber = 3
        keyword = '中心'
    }
    else if(trends[trendNumber] == '世足賽'){
        if(keyword != '世足賽' & keyword != '台灣'){
            keyword = '世足賽'
        }
    }
    else if(trends[trendNumber] == '疫情'){
        if(keyword != '中心' & keyword != '疫苗'){
            keyword = '中心'
        }
    }
    const vids = topic_vid[trends[trendNumber]][keyword]
    // console.log('vids', vids)
    return (
        <div>
            {vids.map((vid, i) => (
                <VideoCard 
                    key = {i}    
                    height = {height}
                    width = {width}
                    vid = {Object.keys(vid)[0]}
                    setVideoID = {setVideoID}
                    data = {vid}
                    cardId = {i}
                    setCardId = {setCardId}
                />
            ))}
        </div>
        
    )
}



export default VideoList;