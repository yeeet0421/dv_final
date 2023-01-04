import React , { useCallback, useState } from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


//import words from "./word.js";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);


// heighWeight v.s. fontSize unresolved!!!
const MyWordCloud = ({height, width, data, setKeyword, setUIProgress}) => {
    const onWordClick = useCallback((word) => {
        //const temp =  word.syntheticEvent.nativeEvent.srcElement.textContent;
        //console.log(temp);
        setKeyword(word.syntheticEvent.nativeEvent.srcElement.textContent);
      }, [setKeyword]);
    const fontSize = useCallback((word) => Math.log2(word.value) * 5, []);
    const rotate = useCallback(() => 0, []);
    const fill = useCallback((d, i) => schemeCategory10ScaleOrdinal(i), []);
    
    
    // Use the useState hook to manage the component's state
    const [cloudWidth, setCloudWidth] = useState(width); // Initialize the width to 500

    // Create a function to handle the resize button click event
    const handleResizeClick = () => {
      setCloudWidth(width + 100); // Increase the width by 100 when the button is clicked
    };


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