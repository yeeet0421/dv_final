import React from 'react';
import { useState } from 'react';
import MyWordCloud from './MyWordCloud';
import ImageCard from './ImageCard';
import VideoList from './VideoList';
import CloudLegend from './CloudLegend';

const WordCloudFrame = ({windowWidth, windowHeight, data, trends, setUIProgress, trendNumber}) => {

    const [keyword, setKeyword] = useState(false);
    const [videoID, setVideoID] = useState(false);
    const [cardId, setCardId] = useState(false);
    //const [cardDetailNumber, setCardDetailNumber] = useState(0);
    
    const handleButtonClick = () => {
    }

    const containerStyles = {
        display: "flex"
      };
      
    const leftDivStyles = {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    };
      
      const rightDivStyles = {
        flex: 1,
        overflow: "auto"

      };
    const buttonStyle = {
        width: '400px',
        height: '50px'
    }
    const ref = React.createRef();
    return(
        <div>
            <div style={{textAlign:"center", fontSize:36, fontFamily:"Cambria",marginTop: "30px"}}
                height={windowHeight*0.1}
            >
                {trends[trendNumber]}
            </div>
            <div style={{float:'left'}}>
                <CloudLegend
                    trends = {trends}
                    trendNumber = {trendNumber}
                ></CloudLegend>
                </div>
            <div style={containerStyles}>
                <div style={leftDivStyles} className = "parent-div">
                    <MyWordCloud ref = {ref}
                            height = {windowHeight}
                            width = {keyword===false? windowWidth:windowWidth*0.5}
                            data = {data}
                            keyword = {keyword}
                            setKeyword = {setKeyword}
                            setVideoID = {setVideoID}
                            trends = {trends}
                            trendNumber = {trendNumber}
                    />
                </div>
                {keyword && (!(videoID)) &&<div style={rightDivStyles}>
                    <VideoList height = {windowHeight}
                                width = {windowWidth} 
                                trends = {trends}
                                trendNumber = {trendNumber}
                                setVideoID = {setVideoID}
                                keyword = {keyword}
                                setCardId = {setCardId}
                                cardId = {cardId}
                    />
                </div>}
                {videoID && <div style={rightDivStyles}>
                    <ImageCard imagePath={"https://i.imgur.com/ymAVFbg.png"}
                            height = {windowHeight}
                            width = {windowWidth}
                            keyword = {keyword}
                            setVideoID = {setVideoID}
                            trends = {trends}
                            trendNumber = {trendNumber}
                            vid = {videoID}
                            cardId = {cardId}
                    />
                </div>}
            </div>
        </div>
        
    )
    
}



export default WordCloudFrame;