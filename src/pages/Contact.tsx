import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Contact: React.FC = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h3>LinkedIn:
                        <a href="https://www.linkedin.com/in/jordan-barrilleaux-926b27155/">
                            <img alt="LinkedIn" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/>
                        </a>
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Email:
                        <a href="mailto:jordanpbarrilleaux@gmail.com">JordanPBarrilleaux@gmail.com</a>
                    </h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact
