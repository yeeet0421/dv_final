import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const IntroCards = ({toggleVisibility, setCardDetailNumber}) => {
    const handleClick = (number) => {
        setCardDetailNumber(number);
        toggleVisibility(true);
    };
    return (
        <Row >
            <Col
                m={6}
                s={12}
            >
                <a href="#" 
                onClick={() => handleClick(1)}
                >
                    <CardPanel className="teal" style={{ width: '50%' ,  textAlign : 'center'}}>
                    <span className="white-text" style={{fontSize: 2 + 'em'}}>
                        1st trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onClick={() => handleClick(2)}
                >
                    <CardPanel className="teal" style={{ width: '50%' ,  textAlign : 'center'}}>
                    <span className="white-text" style={{fontSize: 2 + 'em'}}>
                        2st trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onClick={() => handleClick(3)}
                >
                    <CardPanel className="teal" style={{ width: '50%' ,  textAlign : 'center'}}>
                    <span className="white-text" style={{fontSize: 2 + 'em'}}>
                        3rd trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onClick={() => handleClick(4)}
                >
                    <CardPanel className="teal" style={{ width: '50%' ,  textAlign : 'center'}}>
                    <span className="white-text" style={{fontSize: 2 + 'em'}}>
                        4th trend
                    </span>
                    </CardPanel>
                </a>
                <a href="#" 
                onClick={() => handleClick(5)}
                >
                    <CardPanel className="teal" style={{ width: '50%' ,  textAlign : 'center'}}>
                    <span className="white-text" style={{fontSize: 2 + 'em'}}>
                        5th trend
                    </span>
                    </CardPanel>
                </a>
            </Col>
        </Row>

    ) 
    
}



export default IntroCards;