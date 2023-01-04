import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const IntroCards = ({ setTrendNumber, windowHeight, windowWidth, setUIProgress, trendNumber}) => {
    const handleMouseEnter = (number) => {
        setTrendNumber(number);
    };


    return (
        <Row >
            <Col
                m={6}
                s={12}
            >
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(1)}
                onClick = {() => setUIProgress(2)}
                >
                    <CardPanel className="teal" style={{ width: windowWidth*0.4 ,
                                                        height : windowHeight*0.12,
                                                          textAlign : 'center',
                                                          marginTop: windowHeight*0.07,
                                                          marginBottom: windowHeight*0.07 }}
                    >
                    <span className="white-text" style={{fontSize: 3 + 'em'}}>
                        1st trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(2)}
                onClick={() => setUIProgress(2)}
                >
                    <CardPanel className="teal" style={{ width: windowWidth*0.4 ,
                                                        height : windowHeight*0.12,
                                                          textAlign : 'center',
                                                          marginTop: windowHeight*0.07,
                                                          marginBottom: windowHeight*0.07 }}
                    >
                    <span className="white-text" style={{fontSize: 3 + 'em'}}>
                        2st trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(3)}
                onClick={() => setUIProgress(2)}
                >
                    <CardPanel className="teal" style={{ width: windowWidth*0.4 ,
                                                        height : windowHeight*0.12,
                                                          textAlign : 'center',
                                                          marginTop: windowHeight*0.07,
                                                          marginBottom: windowHeight*0.07 }}
                    >
                    <span className="white-text" style={{fontSize: 3 + 'em'}}>
                        3rd trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(4)}
                onClick={() => setUIProgress(2)}
                >
                    <CardPanel className="teal" style={{ width: windowWidth*0.4 ,
                                                        height : windowHeight*0.12,
                                                          textAlign : 'center',
                                                          marginTop: windowHeight*0.07,
                                                          marginBottom: windowHeight*0.07 }}
                    >
                    <span className="white-text" style={{fontSize: 3 + 'em'}}>
                        4th trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(5)}
                onClick={() => setUIProgress(2)}
                >
                    <CardPanel className="teal" style={{ width: windowWidth*0.4 ,
                                                        height : windowHeight*0.12,
                                                          textAlign : 'center',
                                                          marginTop: windowHeight*0.07,
                                                          marginBottom: windowHeight*0.07 }}
                    >
                    <span className="white-text" style={{fontSize: 3 + 'em'}}>
                        5th trend
                    </span>
                    </CardPanel>
                </a>
            </Col>
        </Row>

    ) 
    
}



export default IntroCards;