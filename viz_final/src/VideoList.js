import React, {useState} from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import VideoCard from './VideoCard';

const VideoList = ({height, width, setVideoID}) => {
    
    return (
        <div>
            <VideoCard height = {height}
                        width = {width}
                        setVideoID = {setVideoID}
            />
            <VideoCard height = {height}
                        width = {width}
                        setVideoID = {setVideoID}
            />
            <VideoCard height = {height}
                        width = {width}
                        setVideoID = {setVideoID}
            />
            <VideoCard height = {height}
                        width = {width}
                        setVideoID = {setVideoID}
            />
        </div>
        
    )
}



export default VideoList;