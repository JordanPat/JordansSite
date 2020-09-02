import React, {} from 'react';
import { Row, Col, Alert, Container } from 'react-bootstrap';


// import poster from '../imgs/MLAirHockey/Poster.png'

interface ContactProps {

};

const Contact: React.FC<ContactProps> = (ContactProps) => {
    return(
        <>
        <Container>
            <Row>
                <Col className=""> 
                    <h3>LinkedIn: 
                        <a href="https://www.linkedin.com/in/jordan-barrilleaux-926b27155/">
                            <img alt="linked in logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/>
                        </a>
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col className=""> 
                    <h3>
                        <p>e-mail:
                            <a href="mailto: jordanpbarrilleaux@gmail.com">JordanPBarrilleaux@gmail.com</a>
                        </p>
                    </h3>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Contact