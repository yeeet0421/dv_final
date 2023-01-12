import React , { useCallback, useState } from 'react';
//import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './WordCloud.css'
//import words from "./word.js";




const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);


// heighWeight v.s. fontSize unresolved!!!
const MyWordCloud = ({height, width, data, setKeyword, setVideoID, trends, trendNumber, keyword}) => {
    const onWordClick = useCallback((word) => {
        setVideoID(false);
        setKeyword(word.syntheticEvent.nativeEvent.srcElement.textContent);
        

        //const temp =  word.syntheticEvent.nativeEvent.srcElement.textContent;
        const temp = word.syntheticEvent.nativeEvent.srcElement;
        
        const previousSelected = document.querySelector('.selected-word');
        if (previousSelected) {
          previousSelected.classList.remove('selected-word');
          //previousSelected.classList.add('word-clicked');
        }
        //temp.classList.remove('word-clicked');
        temp.classList.add('selected-word');
        console.log(word);

      }, [setKeyword, setVideoID]);
    const fontSize = useCallback((word) => Math.log2((word.value*5)^100) * 5 
                                            , []);
    const rotate = useCallback(() => 0, []);
    const fill = useCallback(((d, i) => d.color));
    const fontWeight = useCallback((d) => {
        return (d.text===keyword)?"bold":"normal";
    },[]);

    
    /*
    const styles = {
        height: width*(7/6),
        width: width
    }
    */
    const styles = {
        height: height,
        width: height *(6/7),
        alignItems: "center",
        justifyContent: "center",
    }
      
    return(
        <div>
            <div style={styles} className = {keyword? 'word-clicked':''}>
            <WordCloud
                data={data[trends[trendNumber]]}
                //width={width}
                //height={height}
                font="Arial"
                fontStyle="italic"
                fontWeight={fontWeight}
                fontSize={fontSize}
                spiral="rectangular"
                rotate={rotate}
                padding={2}
                fill={fill}
                onWordClick={onWordClick}
            />
            </div>
        </div>
        
    );
    };
export default MyWordCloud;