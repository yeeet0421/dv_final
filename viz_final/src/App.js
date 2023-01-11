
import MyWordCloud from './MyWordCloud';
import IntroFrame from './IntroFrame';
import React, { useState, useEffect } from 'react';
import WordCloudFrame from './WordCloudFrame';
import data from "./word.js";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  const trends = ['1922', '世足賽', '地震', '疫情', '烏克蘭'];
  const [progress, setProgress] = useState(1);
  const [trendNumber, setTrendNumber] = useState(6);
  const temp1 = window.innerWidth;
  const temp2 = window.innerHeight;
  const [windowWidth, setWindowWidth] = useState(temp1);
  const [windowHeight, setWindowHeight]= useState(temp2);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const setUIProgress = (number) => {
    setProgress(number);
  };

    if (progress===1){
      return(
        <div>
          <IntroFrame windowWidth = {windowWidth}
                      windowHeight = {windowHeight*0.8}
                      setUIProgress = {setUIProgress}
                      trends = {trends}
                      trendNumber = {trendNumber}
                      setTrendNumber = {setTrendNumber}
          />
          {/* <button type="button" class="btn btn-primary" onClick={()=>setUIProgress(2)}>Next UI</button> */}
        </div>
      );
    } else if (progress===2){
      return(
        <div>
          <IconButton style={{float:"left",marginRight: 20,}} color="inherit" aria-label="Close" onClick={()=>setUIProgress(1)}>
              <ArrowBackIcon />
          </IconButton>
          <WordCloudFrame windowWidth = {windowWidth}
                      windowHeight = {windowHeight*0.85}
                      trends = {trends}
                      trendNumber = {trendNumber}
                      data = {data} 
                      setUIProgress = {setUIProgress}
          />
          {/*<button onClick={()=>setUIProgress(3)}>Next UI</button>*/}
        </div>
      );
    } else if (progress===3){
      return(
        <div>
          <IconButton style={{float:"left",marginRight: 10,}} color="inherit" aria-label="Close" onClick={()=>setUIProgress(1)}>
              <ArrowBackIcon />
          </IconButton>
          <MyWordCloud width = {1500}
                      height = {800}
                      data = {data} 
                      //fontWeight = {(data)=>data.value}
          />
          <button onClick={()=>setUIProgress(1)}>Next UI</button>
        </div>
      );
    }
}

export default App;
