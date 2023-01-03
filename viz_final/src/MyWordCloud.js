import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


import words from "./word.js";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);


// heighWeight v.s. fontSize unresolved!!!
const MyWordCloud = ({height, width}) => {
    return(
        <div style={{height: '100px'}}>
            <WordCloud
                data={words}
                width={width}
                height={height}
                font="Times"
                fontStyle="italic"
                fontWeight="bold"
                fontSize={(word) => Math.log2(word.value) * 5}
                spiral="rectangular"
                rotate={(word) => 0}
                padding={5}
                random={Math.random}
                fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
                onWordClick={(event, d) => {
                    console.log(`onWordClick: ${d.text}`);
                }}
                onWordMouseOver={(event, d) => {
                    console.log(`onWordMouseOver: ${d.text}`);
                }}
                onWordMouseOut={(event, d) => {
                    console.log(`onWordMouseOut: ${d.text}`);
                }}
        />
        </div>
    );
    };
export default MyWordCloud;