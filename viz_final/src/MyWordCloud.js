import React , { useCallback } from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


//import words from "./word.js";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);


// heighWeight v.s. fontSize unresolved!!!
const MyWordCloud = ({height, width, data, setKeyWord, setUIProgress}) => {
    const onWordClick = useCallback((word) => {
        const temp =  word.syntheticEvent.nativeEvent.srcElement.textContent;
        console.log(temp);
        //setKeyWord(temp);
      }, []);

    return(
        <div style={{height: height, width: width}}>
            <WordCloud
                data={data}
                width={width}
                height={height}
                font="Times"
                fontStyle="italic"
                fontWeight="bold"
                fontSize={(word) => Math.log2(word.value) * 5}
                spiral="rectangular"
                rotate={(word) => 0}
                padding={5}
                fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
                onWordClick={onWordClick}
                setUIProgress = {setUIProgress}
                /*onWordMouseOver={(event, d) => {
                    console.log(`onWordMouseOver: ${d.text}`);
                }}
                onWordMouseOut={(event, d) => {
                    console.log(`onWordMouseOut: ${d.text}`);
                }}*/
        />
        </div>
    );
    };
export default MyWordCloud;