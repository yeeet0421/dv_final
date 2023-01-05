import React from 'react';
import { useState } from 'react';
import MyWordCloud from './MyWordCloud';
import ImageCard from './ImageCard';
import VideoList from './VideoList';

const WordCloudFrame = ({windowWidth, windowHeight, data, setUIProgress, trendNumber}) => {

    const [keyword, setKeyword] = useState(false);
    const [videoID, setVideoID] = useState(false);
    //const [cardDetailNumber, setCardDetailNumber] = useState(0);
    const containerStyles = {
        display: "flex"
      };
      
      const leftDivStyles = {
        flex: 1,
        overflow: "hidden",
      };
      
      const rightDivStyles = {
        flex: 1,
        overflow: "auto"

      };
    
    return(
        <div>
            <div style={{textAlign:"center", fontSize:36, fontFamily:"Cambria",marginTop: "30px"}}>Trend {trendNumber}</div>
            <div style={containerStyles}>
                <div style={leftDivStyles}>
                    <MyWordCloud height = {windowHeight}
                            width = {keyword===false? windowWidth:windowWidth*0.5}
                            data = {data}
                            setKeyword = {setKeyword}
                            setVideoID = {setVideoID}
                    />
                </div>
                {keyword && (!(videoID)) &&<div style={rightDivStyles}>
                    <VideoList height = {windowHeight}
                                width = {windowWidth} 
                                setVideoID = {setVideoID}
                    />
                </div>}
                {videoID && <div style={rightDivStyles}>
                    <ImageCard imagePath={"https://i.imgur.com/ymAVFbg.png"}
                            height = {windowHeight}
                            width = {windowWidth}
                            keyword = {keyword}
                    />
                </div>}
            </div>
        </div>
        
    )
    
}



export default WordCloudFrame;