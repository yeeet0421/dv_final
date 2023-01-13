import React , { useCallback, useState, forwardRef} from 'react';
//import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './WordCloud.css'

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
const MyWordCloud = ({height, width, data, setKeyword, setVideoID, trends, trendNumber, keyword}) => {
    const onWordClick = useCallback((word) => {
        setVideoID(false);
        setKeywordWrapper(word.syntheticEvent.nativeEvent.srcElement.textContent);
        

        //const temp =  word.syntheticEvent.nativeEvent.srcElement.textContent;
        const temp = word.syntheticEvent.nativeEvent.srcElement;
        
        const previousSelected = document.querySelector('.selected-word');
        if (previousSelected) {
          previousSelected.classList.remove('selected-word');
          //previousSelected.classList.add('word-clicked');
        }
        //temp.classList.remove('word-clicked');
        temp.classList.add('selected-word');

      }, []);
    const setKeywordWrapper = useCallback((word) => setKeyword(word), []);
    const [buttonPressed, setButtonPressed] = useState(false);
    const fontSize1 = useCallback((word) => Math.log2((word.value*5)^100) * 5, []);
    const fontSize2 = useCallback((word) => Math.log2(10000/(word.value*5)) * 5, []);
    //const fontSize = () => buttonPressed? fontSize1:fontSize2;
    const toggleButtonPressed = () => {
        setButtonPressed(!buttonPressed);
    }
    
    const rotate = useCallback(() => 0, []);
    const fill = useCallback(((d, i) => d.color));
    const fontWeight = useCallback((d) => {
        return (d.text===keyword)?"bold":"normal";
    },[]);

    const styles = {
        height: height,
        width: height *(6/7),
        alignItems: "center",
        justifyContent: "center",
    }
// newly add for adding class based on font-size ---------------------------
    const buttonStyle = {
        width: '500px',
        height: '80px',
        paddingTop: '40px',
        paddingLeft:'50px',
        left:'50px'
    }




//-----------------------------------------------------------------------------
    return(
        <div className="container">
            {(!buttonPressed&&<a class="waves-effect waves-light btn" 
                style = {buttonStyle}
                onClick={toggleButtonPressed}>I want to see few-uploaded topics</a>)}
            {(buttonPressed&&<a class="waves-effect waves-light btn" 
                style = {buttonStyle}
                onClick={toggleButtonPressed}>I want to see most-uploaded topics</a>)}
            <div style={styles} className = {keyword? 'word-clicked':''}>
            {(!buttonPressed&&<WordCloud
                data={data[trends[trendNumber]]}
                //width={width}
                //height={height}
                font="Arial"
                fontStyle="italic"
                fontWeight={fontWeight}
                fontSize={fontSize1}
                spiral="rectangular"
                rotate={rotate}
                padding={2}
                fill={fill}
                onWordClick={onWordClick}
            />)}
            {(buttonPressed&&<WordCloud
                data={data[trends[trendNumber]]}
                //width={width}
                //height={height}
                font="Arial"
                fontStyle="italic"
                fontWeight={fontWeight}
                fontSize={fontSize2}
                spiral="rectangular"
                rotate={rotate}
                padding={2}
                fill={fill}
                onWordClick={onWordClick}
            />)}
            </div>
            
        </div>
        
    );
}
export default MyWordCloud;