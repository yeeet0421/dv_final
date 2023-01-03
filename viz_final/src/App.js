
import MyWordCloud from './MyWordCloud';
import IntroFrame from './IntroFrame';
import React, { useState, useEffect } from 'react';



const data = [
  { text: 'Hey', value: 1000 },
  { text: 'I', value: 500 },
  { text: 'am', value: 300 },
  { text: 'yh', value: 100 },
  { text: 'lin', value: 50 },
  { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },

];


function App() {
  const [progress, setProgress] = useState(1);
  const temp = window.innerWidth;
  console.log(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(temp);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  
  const handleClick = (number) => {
    setProgress(number);
  };


    if (progress===1){
      return(
        <div>
          <IntroFrame windowWidth = {windowWidth}/>
          
          <button onClick={()=>handleClick(2)}>Next UI</button>
        </div>
      );
    } else if (progress===2){
      return(
        <div>
          <MyWordCloud width = {1000}
                      height = {500}
                      data = {data} 
                      //fontWeight = {(data)=>data.value}
          />
          <button onClick={()=>handleClick(3)}>Next UI</button>
        </div>
      );
    } else if (progress===3){
      return(
        <div>
          <MyWordCloud width = {1500}
                      height = {800}
                      data = {data} 
                      //fontWeight = {(data)=>data.value}
          />
          <button onClick={()=>handleClick(1)}>Next UI</button>
        </div>
      );
    }
}

export default App;
