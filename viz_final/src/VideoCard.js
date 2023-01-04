import React, { useState } from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
//import VideoCard from './VideoCard';

const VideoCard = () => {

    return (

        <Row>
            <Col
                m={6}
                s={12}
            >
                <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://i.imgur.com/VN0lRU8.png" />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Here is the standard card with a horizontal image.
                </Card>
            </Col>
        </Row>
    )
}



export default VideoCard;