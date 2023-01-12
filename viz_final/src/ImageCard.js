import React from 'react';
import { useState } from 'react';
import ReactPlayer from "react-player";
import PieChart from './PieChart';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import topic_vid from './topic_vid';
import { Row, Col} from 'react-materialize';
const ImageCard = ({ imagePath, width, height, keyword, setVideoID, vid, cardId, trends, trendNumber}) => {
  const styles = ({
    OuterContainer: {
        // position: "fixed",
        flexDirection: "row",
        // right:'10%',
        // bottom:'0%',
        // top: '0%',
        flexWrap: 'no-wrap',
        // zIndex:6,
        width: {width},
        // margin:10,
        // padding:10
    },
    rootTitle:{
        // margin:10,
        paddingBottom:20,
        textAlign:"center",
        fontSize:36,
        fontFamily:"Cambria"
    },
    paper2: {
        width:{width},
        // height: 850,
        overflowX: "hidden",
        overflowY: "scroll",
        padding: 15,
        margin : 15,
    },
    paper2_UpperContainer: {
        display: 'flex',
        flexDirection: "column",
    },
    paper2_BelowContainer: {
        display: 'flex',
        flexDirection: "row",
    },
    containerTitle:{
        display:"flex",
        fontSize:14,
        fontWeight:"bold",
        //width: {halfWidth},
    },
    CloseBotton: {
        // marginLeft: 5,
        float:"right",
        marginRight: 1,

    },
    content:{
        // display: "block",
        margin: "auto",
        display:"flex"
    }
});
  if(trends[trendNumber] == '1922' || trends[trendNumber] == '地震'){
    trendNumber = 1
    keyword = '世足賽'
  }
  else if(trends[trendNumber] == '烏克蘭'){
    trendNumber = 3
    keyword = '中心'
  }
  else if(trends[trendNumber] == '世足賽'){
    if(keyword != '世足賽' & keyword != '台灣'){
        keyword = '世足賽'
    }
  }
  else if(trends[trendNumber] == '疫情'){
    if(keyword != '中心' & keyword != '疫苗'){
        keyword = '中心'
    }
  }
  const data = topic_vid[trends[trendNumber]][keyword][cardId][vid]
  // console.log(data)
  // const vid = "ClAW97s-h_Q"
  const vid_sent = data['avg_sentiment']
  let col_g = 255*vid_sent
  let col_r = 255*(1-vid_sent)
  let col_b = 0
  if((col_r>col_g)){
      let tmp = 255-col_r
      col_r = 255
      col_g = col_g + tmp
      col_b = tmp
  }
  else{
      let tmp = 255-col_g
      col_g = 255
      col_r = col_r + tmp
      col_b = tmp
  }
  return (
    <div className="row">
      <div className="col s12 m7" style={{ width: width * 0.5, height: height, backgroundColor:`rgb(${col_r},${col_g},${col_b}, 0.5)`}}>
        <div className="card" style={{ width: width * 0.48, height: height*0.95,overflow:'scroll'}}>
        <div style={{paddingBottom:20,
        textAlign:"center",
        fontSize:36,
        fontFamily:"Cambria",backgroundColor:`rgb(${col_r},${col_g},${col_b}, 0.2)`}}>
        <span className="card-title">{keyword}</span>
          <IconButton style={styles.CloseBotton} color="inherit" aria-label="Close" onClick={()=>setVideoID(false)}>
              <CloseIcon />
          </IconButton>
          </div>
          <div className="card-image">
            {/* <img src="images/sample-1.jpg"/>
            <img src={imagePath} /> */}
            <ReactPlayer    url={"https://www.youtube.com/watch?v="+vid}
                                        width={width * 0.48}
                                        height={width * 0.48*9/16}
                                        controls = {true} />
          </div>
          {/* <div className="card-content">
            <span className="card-title">{keyword}_Video Title</span>
          </div> */}
          <div className="card-action">
            {/* <p>Some Statistics</p>
            <a href="#">
              <img src="https://i.imgur.com/HhqZIBb.png" />
              Some descriptions with link
            </a> */}
            <p style={{fontWeight: "bold", fontSize: 1.5+'em'}}>{data['channelTitle']}</p>
            <Row>
                    <Col
                        m={6}
                        s={6}
                    >
                        <span>總影片量：{data['total_video']}</span>
                    </Col>
                    <Col
                        m={6}
                        s={6}
                    >
                        <span>總觀看數：{data['total_view']}</span>
                    </Col>
                </Row>
            <div style={{width: width * 0.45}}>
            <PieChart height={height*0.5} data_ = {data['channel_chart']}>
            </PieChart>
            </div>
            {/* <p>Some Statistics</p>
            <a href="#">
              <img src="https://i.imgur.com/HhqZIBb.png" />
              Some descriptions with link
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;