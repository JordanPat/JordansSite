import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectCard from './components/ProjectCard';

import siteImages from "./siteImages.json";

import {Container, Row, Col, Nav, Button, Card, Carousel, Modal, ModalBody, Alert, CardDeck, CardColumns } from 'react-bootstrap';

const App: React.FC = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
    <Container>
      {/* <!-- Header --> */}
      <Row className="justify-content-md-center" style={{paddingTop:'2em'}}>
        <Alert variant="danger">
          <Alert.Heading>UNDER CONSTRUCTION!!!</Alert.Heading>
        </Alert>
      </Row>
      <Row className="justify-content-md-center" style={{}}>
        <Col>
          <h1>Jordan Barrilleaux</h1>
          <h2 className="w3-xlarge">Portfolio</h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{padding:"4em"}}>
        <Nav className="justify-content-center" activeKey="/home" variant="tabs">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/cv.html">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/contact.html">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      {/* first row */}
      <Row className="" style={{alignItems:"center", justifyContent:"center"}}>
        {/* card 1 with bootstrap */}
        <CardDeck style={{borderWidth:"5px", borderColor:"black"}}>
          <Card border="primary" style={{width: '20em'}}>
            <Carousel>
              <Carousel.Item>
                <img className="" alt="poster img" src={"/imgs/MLAirHockey/Poster.png"} style={{width:"100%", height: "100%"}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="" alt="mlah model" src={'./imgs/MLAirHockey/AirHockeyModel.jpeg'} style={{width:"100%", height: "100%"}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="" alt="table picture" src={'./imgs/MLAirHockey/table.jpg'} style={{width:"100%", maxHeight: "100%"}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="" alt="hitrate graph" src={'./imgs/MLAirHockey/hitrate.png'} style={{width:"100%", maxHeight: "100%"}}/>                
              </Carousel.Item>
              <Carousel.Item>
                <img className="" alt="MLSim" src={"/imgs/MLAirHockey/MLSim.png"} style={{width:"100%", maxHeight: "100%"}}/>
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>UAH Machine Learning Air Hockey Table</Card.Title>
              <Card.Text>
                body text here
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>Info</Button>
            </Card.Body>
          </Card>
            
            {/* react rah modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>UAH ML Air Hockey</Modal.Title>
              </Modal.Header>
              <ModalBody>
                <ul className="w3-ul w3-border w3-hoverable w3-large w3-left-align">
                  <li>Machine learning paddle arm using tensorflow in python</li>
                  <li>Propotional integral derivative (PID) controlled opponent paddle</li>
                  <li>Puck tracking using OpenCV computer vision</li>
                  <li>Arduino controlled servo system</li>
                </ul>
              </ModalBody>
              <Modal.Footer>
                <Button variant="link" href="https://github.com/ChargerAirHockey?tab=repositories">Github Project Link</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          {/* react card 3 */}
          <ProjectCard title="Pillow Fluffer 2000" body="body text here!!" projectImages={siteImages.PillowFluffer}></ProjectCard>

      {/* first row end */} 

      {/* second row */} 

          {/* <!--card 2--> */}
          <div className="w3-card w3-center w3-margin" style={{maxWidth:"40em"}}>
            <div className="w3-display-container w3-text-black">
              <img className="" alt="missing img" src="/imgs/portfolioSite.png" style={{width:"100%"}}/>
              <div className="w3-large w3-display-bottomleft w3-padding w3-light-grey">
                <p style={{fontWeight: "bold"}}>Jordan Barrilleaux Portfolio Site</p>
              </div>
            </div>
            <div className="">
              <button className="w3-button w3-black">Details</button>
            </div>
            {/* <!--Portfolio Modal--> */}
            <div id="id02" className="w3-modal">
              <div className="w3-modal-content w3-animate-top w3-card-4">
                <header className="w3-container w3-teal"> 
                  <span 
                  className="w3-button w3-display-topright">&times;</span>
                  <h2>Jordan Barrilleaux Portfolio Site</h2>
                </header>
                <ul className="w3-ul w3-border w3-hoverable w3-large w3-left-align">
                  <li>Built with ReactJS</li>
                  <li>react-bootstrap component library for style</li>
                  <li>Hosted using Google Firebase</li>
                </ul>
                <a href="https://github.com/JordanPat/JordansSite"><p>Link to portfolio site Guthub</p></a>
              </div>
            </div>
          </div>

          {/* <!--Card 4--> */}
          <div className="w3-card w3-center w3-margin" style={{maxWidth:"40em"}}>
            <div className="w3-display-container w3-text-black">
              <img className="" alt="missing img" src="/imgs/2TapTimer/timerSelect.PNG" style={{width:"100%"}}/>
              <div className="w3-large w3-display-bottomleft w3-padding w3-light-grey">
                <p style={{fontWeight: "bold"}}>COMING SOON- Easy Timer React Native App</p>
              </div>
            </div>
            <div className="">
              <button className="w3-button w3-black">Details</button>
            </div>
            {/* <!--Portfolio Modal--> */}
            <div id="id04" className="w3-modal">
              <div className="w3-modal-content w3-animate-top w3-card-4">
                <header className="w3-container w3-teal"> 
                  <span 
                  className="w3-button w3-display-topright">&times;</span>
                  <h2>Easy Timer React Native App</h2>
                </header>
                <ul className="w3-ul w3-border w3-hoverable w3-large w3-left-align">
                  <li>Built with React Native and Nativebase</li>
                  <li>start a timer in as little as 2 taps</li>
                </ul>
                <a href="https://github.com/JordanPat/"><p>Link to portfolio site Guthub</p></a>
              </div>
            </div>
          </div>
      </CardDeck>
      </Row>

      {/* // <!-- Footer --> */}
      <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-large"> 
        <a href="https://www.linkedin.com/in/jordan-barrilleaux-926b27155/"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
      </footer>




      {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
      <script src="/__/firebase/7.17.1/firebase-app.js"></script>

      {/* <!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries --> */}
      <script src="/__/firebase/7.17.1/firebase-analytics.js"></script>

      {/* <!-- Initialize Firebase --> */}
      <script src="/__/firebase/init.js"></script>
    </Container>
    </div>
  
  );
}

export default App;
