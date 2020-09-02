import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert, CardColumns } from 'react-bootstrap';

import {Route, Switch, Link} from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';


let count:number = 0;
const App: React.FC = () => {
  count++;
  console.log("count -- " + count);

  return (
    <>
    <Container>
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
        <Route component={CV} path="/pages/CV" />
        <Route component={Contact} path="/pages/Contact" />
        <Route component={Home} path="/" />
      </Switch>

    </Container>  
    </>
  
  );
}

export default App;
