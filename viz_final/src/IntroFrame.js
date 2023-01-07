import React from 'react';
//import { Row, Col, Card, Icon } from 'react-materialize';
import { useState } from 'react';
import IntroCards from './IntroCards';
import CardDetailPanel from './CardDetailPanel';

const IntroFrame = ({windowWidth, windowHeight, setUIProgress, trends, trendNumber, setTrendNumber}) => {

    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div style={{display:'flex'}}>
            <IntroCards setCardDetailNumber = {setTrendNumber}
                        trends = {trends}
                        trendNumber = {trendNumber}
                        windowWidth = {windowWidth}
                        windowHeight = {windowHeight}
                        setUIProgress = {setUIProgress}
                        setTrendNumber = {setTrendNumber}
            />
            <CardDetailPanel isVisible={isVisible}
                        width = {windowWidth * 0.5}
                        trends = {trends}
                        trendNumber = {trendNumber}
                        setTrendNumber = {setTrendNumber}
            />
            
        </div>
        
    ) 
    
}



export default IntroFrame;