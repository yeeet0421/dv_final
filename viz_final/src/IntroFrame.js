import React from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';
import { useState } from 'react';
import IntroCards from './IntroCards';
import CardDetailPanel from './CardDetailPanel';

const IntroFrame = ({windowWidth}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [cardDetailNumber, setCardDetailNumber] = useState(0);


    function toggleVisibility(bool) {
        setIsVisible(bool);
        console.log("isVisible", isVisible);
    }
    /*
    const showCardDetail = () => {
        return { isVisible && (
            <div>
              These components will be shown/hidden when the CardPanel is clicked.
            </div>
          )
        }
    }
    */
    return (
        <div>
            <IntroCards 
            toggleVisibility={toggleVisibility}
            setCardDetailNumber = {setCardDetailNumber}
            windowWidth = {windowWidth}
            />
            <CardDetailPanel 
            toggleVisibility={toggleVisibility}
            isVisible={isVisible}
            width = {windowWidth * 0.5}
            cardDetailNumber = {cardDetailNumber}
            />
            
        </div>
        
    ) 
    
}



export default IntroFrame;