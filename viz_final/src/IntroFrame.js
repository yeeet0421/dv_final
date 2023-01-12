import React from 'react';
//import { Row, Col, Card, Icon } from 'react-materialize';
import { useState } from 'react';
import IntroCards from './IntroCards';
import CardDetailPanel from './CardDetailPanel';
import BarChart from './BarChart';
import overview from './overview';
import Grid from '@material-ui/core/Grid';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

const IntroFrame = ({windowWidth, windowHeight, setUIProgress, trends, trendNumber, setTrendNumber}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isHover, setHover] = useState(false)
    return (
        <div style={{display:'flex'}}>
            <IntroCards setCardDetailNumber = {setTrendNumber}
                        trends = {trends}
                        trendNumber = {trendNumber}
                        windowWidth = {windowWidth}
                        windowHeight = {windowHeight}
                        setUIProgress = {setUIProgress}
                        setTrendNumber = {setTrendNumber}
                        setHover = {setHover}
            />
            <div style={{width:'50%', height:'100%'}}>
                <div style={{width:'100%',height:'50%'}}>
                    <Grid container spacing={0}>
                        <Grid item xs={6} 
                                container
                                direction="row"
                                justifyContent="center"
                                style={{marginTop:10}}>
                            <YouTubeIcon/>
                            <span>Video Quantity</span>
                            {isHover && <span> ({trends[trendNumber]}: {overview["vid"][trendNumber]})</span>}
                        </Grid>
                        <Grid item xs={6} 
                                container
                                direction="row"
                                justifyContent="center"
                                style={{marginTop:10}}>
                            <VisibilityIcon/>
                            <span>Views</span>
                            {isHover && <span> ({trends[trendNumber]}: {overview["view"][trendNumber]})</span>}
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart 
                                labels={['1922', '世足賽', '地震', '疫情', '烏克蘭']}
                                data_ = {overview["vid"]}
                                color ={['rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)']}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart 
                                labels={['1922', '世足賽', '地震', '疫情', '烏克蘭']}
                                data_ = {overview["view"]}
                                color ={['rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)']}
                            />
                        </Grid>
                        <Grid item xs={6} 
                                container
                                direction="row"
                                justifyContent="center"
                                style={{marginTop:10}}>
                            <ThumbUpIcon/>
                            <span>Like Count</span>
                            {isHover && <span> ({trends[trendNumber]}: {overview["like"][trendNumber]})</span>}
                        </Grid>
                        <Grid item xs={6} 
                                container
                                direction="row"
                                justifyContent="center"
                                style={{marginTop:10}}>
                            <CommentIcon/>
                            <span>Comment Count</span>
                            {isHover && <span> ({trends[trendNumber]}: {overview["com"][trendNumber]})</span>}
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart 
                                labels={['1922', '世足賽', '地震', '疫情', '烏克蘭']}
                                data_ = {overview["like"]}
                                color ={['rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)']}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart 
                                labels={['1922', '世足賽', '地震', '疫情', '烏克蘭']}
                                data_ = {overview["com"]}
                                color ={['rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)']}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div style={{width:'100%',height:'40%'}}>
                    <CardDetailPanel isVisible={isVisible}
                                width = {windowWidth * 0.5}
                                trends = {trends}
                                trendNumber = {trendNumber}
                                setTrendNumber = {setTrendNumber}
                    />
                </div>
            </div>
        </div>
        
    ) 
    
}



export default IntroFrame;