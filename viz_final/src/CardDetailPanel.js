import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LineTrend from './LineTrend';
// import { Row, Col} from 'react-materialize';
// import line_data from './line_data.js';

const CardDetailPanel =( {width, trends, setTrendNumber, trendNumber} ) => {
const halfWidth = width*0.5;
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
        paddingTop:20,
        paddingBottom:20,
        textAlign:"center",
        fontSize:18,
        fontFamily:"Cambria"
    },
    paper2: {
        width:{width}-50,
        // height: 850,
        overflowX: "hidden",
        overflowY: "scroll",
        // padding: 15,
        // margin : 15,
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
        
    if(trendNumber !== 6){
        return (
            <div style = {styles.OuterContainer}>
                {/* <Paper style={styles.paper2} elevation={13}> */}
                <Paper style= {Object.assign({}, styles.paper2, styles.paper2.width)} elevation={3}>
                <div style={styles.rootTitle}>
                {trends[trendNumber]} Overview
                {/* <IconButton style={styles.CloseBotton} color="inherit" aria-label="Close" onClick={()=>setTrendNumber(6)}>
                    <CloseIcon />
                </IconButton> */}
                </div>
                {/* <div style = {styles.paper2_UpperContainer}>
                    <div style={styles.rootTitle}> {trends[trendNumber]} Overview</div>
                </div> */}
                <div height="5"><hr></hr></div>
                <div style = {styles.paper2_BelowContainer}>
                    <div style = {{width: width}}>
                        {/* <div style={styles.containerTitle}> Google trend </div> */}
                        <LineTrend
                            trends={trends}
                            trendNumber={trendNumber}
                        ></LineTrend>
                    </div>
                </div>
                <div height="5"><hr></hr></div>
                {/* <div style = {styles.containerTitle}>
                    Statistics
                </div> */}
                {/* <Row>
                    <Col
                        m={7}
                        s={7}
                    >
                        <span>前500相關影片中的繁體中文影片數量：{line_data[trends[trendNumber]]['stat']['vidCount']}</span>
                    </Col>
                    <Col
                        m={5}
                        s={5}
                    >
                        <span>總觀看量：{line_data[trends[trendNumber]]['stat']['viewCount']}</span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        m={7}
                        s={7}
                    >
                        <span>總讚數：{line_data[trends[trendNumber]]['stat']['likeCount']}</span>
                    </Col>
                    <Col
                        m={5}
                        s={5}
                    >
                        <span>總評論量：{line_data[trends[trendNumber]]['stat']['comCount']}</span>
                    </Col>
                </Row> */}
                </Paper>  
            </div>
        );
    }
    else{
        return (
            <div style = {styles.OuterContainer}>
                {/* <Paper style={styles.paper2} elevation={13}> */}
                <Paper style= {Object.assign({}, styles.paper2, styles.paper2.width)} elevation={3}>
                <div style = {styles.paper2_UpperContainer}>
                    <div style={styles.rootTitle}> Hover a keyword to get its overview</div>
                    <div style={styles.rootTitle}> Click a keyword to get its insights</div>
                </div>
                
                </Paper>  
            </div>
        );
    }
}

export default CardDetailPanel;

