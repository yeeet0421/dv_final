import React, {useState} from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const IntroCards = ({ setTrendNumber, windowHeight, windowWidth, setUIProgress, trendNumber, trends}) => {
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
    
    // const cards = 
    // }
    
    return (
        <Row >
            <Col
                m={6}
                s={12}
            >
            {trends.map((trend, i) => (
                <a href="#" 
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                    onClick = {() => setUIProgress(2)}
                    >
                        <CardPanel className={classNames[i]} style={{ width: windowWidth*0.4 ,
                                                                        height : windowHeight*0.12,
                                                                        textAlign : 'center',
                                                                        marginTop: windowHeight*0.07,
                                                                        marginBottom: windowHeight*0.07 }}
                        >
                            <span className="white-text" style={{fontSize:20}}>
                                {trend}
                            </span>
                        </CardPanel>
                </a>
            ))}
            </Col>
        </Row>

    ) 
    
}



export default IntroCards;