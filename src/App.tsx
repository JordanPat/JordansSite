import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert } from 'react-bootstrap';

import {Route, Routes} from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';

var firebaseConfig = {
  apiKey: "AIzaSyB7DSoBZ0mJKDr0Xcurau3e2NRogO_ixzk",
  authDomain: "reactjs-portfolio-63b55.firebaseaprp.com",
  databaseURL: "https://reactjs-portfolio-63b55.firebaseio.com",
  projectId: "reactjs-portfolio-63b55",
  storageBucket: "reactjs-portfolio-63b55.appspot.com",
  messagingSenderId: "872272415846",
  appId: "1:872272415846:web:afc4a93fb1af53f4cb71a7",
  measurementId: "G-W501E0HH51"
};

const App: React.FC = () => {
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
      
      <Routes>
        <Route path="/pages/CV" element={<CV/>} />
        <Route path="/pages/Contact" element={<Contact/>} />
        <Route path="/pages/Home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<>404 not found</>}  />
      </Routes>

    </Container>  

    {/* <!-- Footer --> */}
    <Container fluid style={{backgroundColor:"lightgray"}}>
      <Row style={{}}>
        <Col className="text-center" style={{ paddingTop:"2em", paddingBottom:"2em"}}> 
            <a href="https://www.linkedin.com/in/jordan-barrilleaux-926b27155/" style={{}}>
              <img alt="linked in logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/>
            </a>
        </Col>
      </Row>
    </Container>

    {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
    <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

    {/* <!-- TODO: Add SDKs for Firebase products that you want to use 
    https://firebase.google.com/docs/web/setup#available-libraries --> */}
    <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-analytics.js"></script>


    </>
  
  );
}

export default App;
