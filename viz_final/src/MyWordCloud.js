import React , { useCallback, useState } from 'react';
//import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { CSSTransition } from 'react-transition-group';
import './WordCloud.css'
//import words from "./word.js";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);


// heighWeight v.s. fontSize unresolved!!!
const MyWordCloud = ({height, width, data, setKeyword, setUIProgress, setVideoID}) => {
    const onWordClick = useCallback((word) => {
        //const temp =  word.syntheticEvent.nativeEvent.srcElement.textContent;
        //console.log(temp);
        setVideoID(false);
        setKeyword(word.syntheticEvent.nativeEvent.srcElement.textContent);
      }, [setKeyword]);
    const fontSize = useCallback((word) => Math.log2(word.value) * 5, []);
    const rotate = useCallback(() => 0, []);
    const fill = useCallback((d, i) => schemeCategory10ScaleOrdinal(i), []);
    /*
    const styles = {
        height: width*(7/6),
        width: width
    }
    */
    const styles = {
        height: height,
        width: width,
        alignItems: "center",
    justifyContent: "center",
    }
      


    return(
        <div style={styles} className = "parent-div">
            <CSSTransition in={true} timeout={1000} classNames="fade">
                <WordCloud
                    data={data}
                    //width={width}
                    //height={height}
                    font="Arial"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize={fontSize}
                    spiral="rectangular"
                    rotate={rotate}
                    padding={2}
                    fill={fill}
                    onWordClick={onWordClick}
                    //setUIProgress = {setUIProgress}
                    /*onWordMouseOver={(event, d) => {
                        console.log(`onWordMouseOver: ${d.text}`);
                        console.log(d);
                        d.cursor='pointer';
                    }}*/
                    /*
                    onWordMouseOut={(event, d) => {
                        console.log(`onWordMouseOut: ${d.text}`);
                    }}*/
                />
            </CSSTransition>
            
        </div>
    );
    };
export default MyWordCloud;