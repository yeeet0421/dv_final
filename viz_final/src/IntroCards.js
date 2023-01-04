import React, {useState} from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const IntroCards = ({ setTrendNumber, windowHeight, windowWidth, setUIProgress, trendNumber}) => {
    const [classNames, setClassNames] = useState(['teal', 'teal', 'teal', 'teal', 'teal', 'teal']); // Initialize the classNames array with 'teal'

    // Create event handler functions to update the className of the hovered CardPanel
    const handleMouseEnter = (index) => {
        const newClassNames = [...classNames]; // Create a copy of the classNames array
        newClassNames[index] = 'red'; // Update the className of the hovered CardPanel
        setClassNames(newClassNames); // Update the state with the new classNames array

        setTrendNumber(index);
    };
    const handleMouseLeave = (index) => {
        const newClassNames = [...classNames]; // Create a copy of the classNames array
        newClassNames[index] = 'teal'; // Update the className of the hovered CardPanel
        setClassNames(newClassNames); // Update the state with the new classNames array
    };
    
    
    return (
        <Row >
            <Col
                m={6}
                s={12}
            >
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                onClick = {() => setUIProgress(2)}
                >
                    <CardPanel className={classNames[1]} style={{ width: windowWidth*0.4 ,
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
                onMouseLeave={() => handleMouseLeave(2)}
                onClick = {() => setUIProgress(2)}
                >
                    <CardPanel className={classNames[2]} style={{ width: windowWidth*0.4 ,
                                                        height : windowHeight*0.12,
                                                          textAlign : 'center',
                                                          marginTop: windowHeight*0.07,
                                                          marginBottom: windowHeight*0.07 }}
                    >
                    <span className="white-text" style={{fontSize: 3 + 'em'}}>
                        2nd trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
                onClick = {() => setUIProgress(2)}
                >
                    <CardPanel className={classNames[3]} style={{ width: windowWidth*0.4 ,
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
                onMouseLeave={() => handleMouseLeave(4)}
                onClick = {() => setUIProgress(2)}
                >
                    <CardPanel className={classNames[4]} style={{ width: windowWidth*0.4 ,
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
                onMouseLeave={() => handleMouseLeave(5)}
                onClick = {() => setUIProgress(2)}
                >
                    <CardPanel className={classNames[5]} style={{ width: windowWidth*0.4 ,
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