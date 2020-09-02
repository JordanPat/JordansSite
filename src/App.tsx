import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert } from 'react-bootstrap';

import {Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';

const App: React.FC = () => {

  return (
    <>
    <Container fluid>
      {/* <!-- Header --> */}
      {/* alert */}
      {/* <Row className="" style={{paddingTop:'2em'}}>
        <Col className="text-center">
          <Alert variant="danger">
            <Alert.Heading>UNDER CONSTRUCTION!!!</Alert.Heading>
          </Alert>
        </Col>
      </Row> */}

      {/* title/subtitle */}
      <Row className="" style={{ paddingTop: "2em" }}>
        <Col className="text-center">
          <h1>Jordan Barrilleaux</h1>
          <h2 className="">Portfolio</h2>
        </Col>
      </Row>

      {/* nav bar */}
      <Row className="" style={{padding:"4em"}}>
        <Col>
          <Navigation></Navigation>
        </Col>
      </Row>
      
      <Switch>
        <Route path="/pages/CV" exact component={CV} />
        <Route path="/pages/Contact" exact component={Contact} />
        <Route path="/"  component={Home} />
        {/* <Route path="/" component={()=><>404 not found</>}  /> */}
      </Switch>

    </Container>  

    {/* <!-- Footer --> */}
    <Container fluid style={{backgroundColor:"lightgray"}}>
      <Row style={{}}>
        <Col className="justify-content-md-center" style={{}}> 
          <Container style={{padding:"2em", maxWidth:"1%", maxHeight:"1%"}}>
            <a href="https://www.linkedin.com/in/jordan-barrilleaux-926b27155/" style={{}}>
              {/* <i className="fa fa-linkedin w3-hover-opacity"></i> */}
              <img alt="linked in logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/>
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
    </>
  
  );
}

export default App;
