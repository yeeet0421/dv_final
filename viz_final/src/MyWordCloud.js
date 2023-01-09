import React , { useCallback, useState } from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


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
    


    return(
        <div style={{height: height, width: width}}>
            <WordCloud
                data={data}
                //width={width}
                //height={height}
                font="Times"
                fontStyle="italic"
                fontWeight="bold"
                fontSize={fontSize}
                spiral="rectangular"
                rotate={rotate}
                padding={5}
                fill={fill}
                onWordClick={onWordClick}
                setUIProgress = {setUIProgress}
                onWordMouseOver={(event, d) => {
                    console.log(`onWordMouseOver: ${d.text}`);
                    console.log(d);
                    d.cursor='pointer';
                }}
                /*
                onWordMouseOut={(event, d) => {
                    console.log(`onWordMouseOut: ${d.text}`);
                }}*/
        />
        </div>
    );
    };
export default MyWordCloud;