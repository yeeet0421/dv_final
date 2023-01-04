import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



const CardDetailPanel =( {width, setTrendNumber, trendNumber} ) => {
const halfWidth = width*0.5;
const styles = ({
    OuterContainer: {
        position: "fixed",
        flexDirection: "row",
        right:'10%',
        bottom:'0%',
        top: '0%',
        flexWrap: 'no-wrap',
        zIndex:6,
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
        
    if(trendNumber){
        return (
            <div style = {styles.OuterContainer}>
                {/* <Paper style={styles.paper2} elevation={13}> */}
                <Paper style= {Object.assign({}, styles.paper2, styles.paper2.width, {height:window.innerHeight-130})} elevation={13}>
                <div style={styles.rootTitle}>
                <IconButton style={styles.CloseBotton} color="inherit" aria-label="Close" onClick={()=>setTrendNumber(false)}>
                    <CloseIcon />
                </IconButton>
                </div>
                <div style = {styles.paper2_UpperContainer}>
                    <div style={styles.rootTitle}> Trend{trendNumber} Detail Panel</div>
                </div>
                <div height="5"><hr></hr></div>
                <div style = {styles.paper2_BelowContainer}>
                    <div style = {{width: halfWidth}}>
                        <div style={styles.containerTitle}> Google trend </div>
                    </div>
                    <div style = {{width: halfWidth}}>
                        <div style={styles.containerTitle}> 
                        Youtube Video uploading trend
                        </div>
                        <div style={styles.content}>
                            <svg>
                                <g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div height="5"><hr></hr></div>
                <div>
                    Some Statistics
                </div>
                </Paper>  
            </div>
        );
    }
    else
        return null;
    
}

export default CardDetailPanel;

