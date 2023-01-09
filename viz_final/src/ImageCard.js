import React from 'react';
import { useState } from 'react';
import ReactPlayer from "react-player";
import PieChart from './PieChart';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const ImageCard = ({ imagePath, width, height, keyword, setVideoID}) => {
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
  const vid = "ClAW97s-h_Q"
  return (
    <div className="row">
      <div className="col s12 m7" style={{ width: width * 0.48, height: height * 0.85 }}>
        <div className="card" style={{ width: width * 0.45, height: height * 0.9 }}>
        <div style={styles.rootTitle}>
        <span className="card-title">{keyword}</span>
          <IconButton style={styles.CloseBotton} color="inherit" aria-label="Close" onClick={()=>setVideoID(false)}>
              <CloseIcon />
          </IconButton>
          </div>
          <div className="card-image">
            {/* <img src="images/sample-1.jpg"/>
            <img src={imagePath} /> */}
            <ReactPlayer    url={"https://www.youtube.com/watch?v="+vid}
                                        width={width * 0.45}
                                        height={width * 0.45*9/16}
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
            <div style={{width: width * 0.45}}>
            <PieChart height={height*0.1}>
            </PieChart>
            </div>
            <p>Some Statistics</p>
            <a href="#">
              <img src="https://i.imgur.com/HhqZIBb.png" />
              Some descriptions with link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;