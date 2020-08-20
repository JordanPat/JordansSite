import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import poster from './imgs/MLAirHockey/Poster.png'
import ahmodel from './imgs/MLAirHockey/AirHockeyModel.jpeg'
import table from './imgs/MLAirHockey/table.jpg'
import hitrate from './imgs/MLAirHockey/hitrate.png'
import MLSim from './imgs/MLAirHockey/MLSim.png'

import {Container, Row, Col, Button, Card, Carousel, Modal, ModalBody, Alert } from 'react-bootstrap';

function App () {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





    return (
      <div className="App">
      <Container>

        {/* <!-- !PAGE CONTENT! --> */}
        <div className="w3-content" style={{maxWidth:"1500px"}}>

        <Row className="justify-content-md-center" style={{width:"100%"}}>
          <Col>
        {/* <!-- Header --> */}
        <header className="w3-panel w3-center w3-opacity" style={{padding:"128px 16px"}}> 

          <Alert variant="danger">
            <Alert.Heading>UNDER CONSTRUCTION!!!</Alert.Heading>
          </Alert>
          <h1>Jordan Barrilleaux</h1>
          <h2 className="w3-xlarge">Portfolio</h2>
          
          <div className="w3-padding-32">
            <div className="w3-bar w3-border">
              <a href="/index.html" className="w3-bar-item w3-button w3-light-grey">Home</a>
              <a href="/cv.html" className="w3-bar-item w3-button">Resume</a>
              <a href="/contact.html" className="w3-bar-item w3-button">Contact</a>
            </div>
          </div>
        </header>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        {/* <!-- Prpject Grid --> */}
        <div className="w3-row-padding w3-grayscale" style={{marginBottom:"128px"}}>

          {/* <!--Left Column--> */}
          <div className="w3-half">
            {/* card 1 with bootstrap */}
            <Card style={{width: '18em'}}>
              <Carousel>
                <Carousel.Item>
                  <img className="" alt="poster img" src={poster} style={{width:"100%", height: "80%"}}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="" alt="mlah model" src={ahmodel} style={{width:"100%", height: "80%"}}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="" alt="table picture" src={table} style={{width:"100%", maxHeight: "80%"}}/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="" alt="hitrate graph" src={hitrate} style={{width:"100%", maxHeight: "80%"}}/>                
                </Carousel.Item>
                <Carousel.Item>
                 <img className="" alt="MLSim" src={MLSim} style={{width:"100%", maxHeight: "80%"}}/>
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
            {/* <!--card 1--> */}
            <div className="w3-card w3-center w3-margin" style={{maxWidth:"40em;"}}>
              
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
              {/* <!--RAH Modal--> */}
              <div id="id01" className="w3-modal">
                <div className="w3-modal-content w3-animate-top w3-card-4">
                  <header className="w3-container w3-teal"> 
                    <span onclick="document.getElementById('id01').style.display='none'" 
                    className="w3-button w3-display-topright">&times;</span>
                    <h2>UAH Machine Learning Air Hockey Table</h2>
                  </header>
                  <ul className="w3-ul w3-border w3-hoverable w3-large w3-left-align">
                    <li>Machine learning paddle arm using tensorflow in python</li>
                    <li>Propotional integral derivative (PID) controlled opponent paddle</li>
                    <li>Puck tracking using OpenCV computer vision</li>
                    <li>Arduino controlled servo system</li>
                  </ul>
                  <a href="https://github.com/ChargerAirHockey?tab=repositories"><p className="" style={{fontWeight: "bold;"}}>Link to Charger Air Hockey Guthub</p></a>
                </div>
              </div>
            </div>

            {/* <!--card 3 --> */}
            <div className="w3-card w3-center w3-margin" style={{maxWidth:"40em"}}>
              <div className="w3-display-container w3-text-white">
                <a href="https://github.com/ChargerAirHockey?tab=repositories">

                  <div className="w3-content w3-display-container">
                    <img className="mySlides2" alt="missing img" src="imgs/PillowFluffer/Overhead.png" style={{width:"100%", height: "80%"}}/>
                    <img className="mySlides2" alt="missing img" src="imgs/PillowFluffer/pov.png" style={{width:"100%", height: "80%"}}/>
                    <img className="mySlides2" alt="missing img" src="imgs/PillowFluffer/unity.png" style={{width:"100%", height: "80%"}}/>
                  </div>

                </a>
                <div className="w3-large w3-display-bottomleft w3-padding w3-light-grey">
                  <p style={{fontWeight: "bold"}}>Pillow Fluffer 2000</p>
                </div>
              </div>
              <div className="">
                <button onclick="document.getElementById('id03').style.display='block'" className="w3-button w3-black">Details</button>
              </div>
              {/* <!--Pillow Fluffer Modal--> */}
              <div id="id03" className="w3-modal">
                <div className="w3-modal-content w3-animate-top w3-card-4">
                  <header className="w3-container w3-teal"> 
                    <span onclick="document.getElementById('id03').style.display='none'" 
                    className="w3-button w3-display-topright">&times;</span>
                    <h2>Pillow Fluffer 2000</h2>
                  </header>
                  <ul className="w3-ul w3-border w3-hoverable w3-large w3-left-align">
                    <li>Built in unity coded in C#</li>
                    <li>custom models with Maya 3d</li>
                  </ul>
                  <a href="https://github.com/ChargerAirHockey?tab=repositories"><p>Link to Guthub</p></a>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Right Column--> */}
          <div className="w3-half">
            {/* <!--card 2--> */}
            <div className="w3-card w3-center w3-margin" style={{maxWidth:"40em"}}>
              <div className="w3-display-container w3-text-black">
                <img className="" alt="missing img" src="/imgs/portfolioSite.png" style={{width:"100%"}}/>
                <div className="w3-large w3-display-bottomleft w3-padding w3-light-grey">
                  <p style={{fontWeight: "bold"}}>Jordan Barrilleaux Portfolio Site</p>
                </div>
              </div>
              <div className="">
                <button onclick="document.getElementById('id02').style.display='block'" className="w3-button w3-black">Details</button>
              </div>
              {/* <!--Portfolio Modal--> */}
              <div id="id02" className="w3-modal">
                <div className="w3-modal-content w3-animate-top w3-card-4">
                  <header className="w3-container w3-teal"> 
                    <span onclick="document.getElementById('id02').style.display='none'" 
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
                  <p style={{fontWweight: "bold"}}>COMING SOON- Easy Timer React Native App</p>
                </div>
              </div>
              <div className="">
                <button onclick="document.getElementById('id04').style.display='block'" className="w3-button w3-black">Details</button>
              </div>
              {/* <!--Portfolio Modal--> */}
              <div id="id04" className="w3-modal">
                <div className="w3-modal-content w3-animate-top w3-card-4">
                  <header className="w3-container w3-teal"> 
                    <span onclick="document.getElementById('id04').style.display='none'" 
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

          </div> 
        </div>
        </Row>

        {/* <script>
          var slideIndex = 0
          var slideIndex2 = 0
          carousel1();
          carousel2();

          function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
          function carousel1() {
            var i;
            var x1 = document.getElementsByClassName("mySlides1");
            for (i = 0; i < x1.length; i++) {
              // alert(x1.length)
              x1[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > x1.length) {slideIndex = 1}
            x1[slideIndex-1].style.display = "inline-block";

            setTimeout(carousel1, getRndInteger(3000, 5000)); // Change image every 2 seconds
          }
          function carousel2() {
            var i;
            var x1 = document.getElementsByClassName("mySlides2");
            for (i = 0; i < x1.length; i++) {
              // alert(x1.length)
              x1[i].style.display = "none";
            }

            slideIndex2++;
            if (slideIndex2 > x1.length) {slideIndex2 = 1}
            x1[slideIndex2-1].style.display = "inline-block";

            setTimeout(carousel2, getRndInteger(3900, 5000)); // Change image every 2 seconds
          }

        </script> */}



        {/* // <!-- End Page Content --> */}
        </div>

        {/* // <!-- Footer --> */}
        <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-large"> 
          <a href="https://www.linkedin.com/in/jordan-barrilleaux-926b27155/"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
        </footer>




        {/* <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="/__/firebase/7.17.1/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries -->
        <script src="/__/firebase/7.17.1/firebase-analytics.js"></script>

        <!-- Initialize Firebase -->
        <script src="/__/firebase/init.js"></script> */}
      </Container>
      </div>
  
    );
}

export default App;
