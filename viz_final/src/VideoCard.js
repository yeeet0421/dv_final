import React, { useState } from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
//import VideoCard from './VideoCard';


const VideoCard = ({ height, width, setVideoID, vid, data, cardId, setCardId}) => {
    // console.log('data:', data)
    // console.log('data',data, vid)
    const vid_sent = data[vid]['avg_sentiment']
    // console.log(vid_sent)
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
        <div className="col s12 m7" style ={{height: height*0.2, 
                                            width: width*0.43,
                                            marginLeft:40 + "px",
                                            marginBottom:20 + "px"}}
        >
            <a href='#'
                    onClick={() => {setCardId(cardId);setVideoID(vid)}}
                    style={{color:'black'}}
                >
                <div className="card horizontal" style ={{height: height*0.2, backgroundColor:`rgb(${col_r},${col_g},${col_b}, 0.5)`}}>
                    <div className="card-image" style ={{height: height*0.2}}>
                        
                            <img src={data[vid]['thumbnail']}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p style={{ fontWeight: "bold", fontSize: 1+"em" }}>{data[vid]['vidTitle']}</p>
                        </div>
                        {/* <div className="card-text" style={{ textAlign: "right" }}>
                            <a href='#'
                                onClick={() => {setCardId(cardId);setVideoID(vid)}}
                            >More info
                            </a>
                        </div> */}
                    </div>
                </div>
            </a>
        </div>
    )
}
{/*    return (
        <Row>
            <Col
                m={6}
                s={12}
            >
                <Card style={{ width: width*0.45 ,
                                //height : height*0.12,
                                textAlign : 'center',
                                //marginTop: height*0.07,
                                marginBottom: height*0.07,
                                fontSize: 25+"px"
                    }}
                    actions={[
                        <a key="1" 
                            href="#" 
                            style={{textAlign:'right'}}
                            onClick = {() => setVideoID(1)}
                        >More Info</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<a href='#'
                                onClick={() => setVideoID(1)}
                            >
                                <CardTitle image="https://i.imgur.com/VN0lRU8.png" />
                            </a>}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    some Video Title
                </Card>
            </Col>
        </Row>
        
                )*/}
{/*
const CardTitle = ({ className, image, reveal, waves, children, ...props }) => {
  const classes = cx(className, {
    'card-image': true,
    'waves-effect': waves,
    'waves-block': waves,
    [`waves-${waves}`]: waves
  });

  return (
    <div className={cx(classes)} {...props}>
      <img className={cx({ activator: reveal })} src={image} />
      <span className={cx('card-title')}>{children}</span>
    </div>
  );
};
 */}


export default VideoCard;