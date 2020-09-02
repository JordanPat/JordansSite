import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert, CardColumns } from 'react-bootstrap';

import ProjectCard from '../components/ProjectCard';
import siteImages from "../siteImages.json";


interface HomeProps {

};

let count:number = 0;
const Home: React.FC = () => {
  count++;
  console.log("count -- " + count);

  const mlAirHockeyInfo = [
    <li>Machine learning paddle arm using tensorflow in python</li>,
    <li>Propotional integral derivative (PID) controlled opponent paddle</li>,
    <li>Puck tracking using OpenCV computer vision</li>,
    <li>Arduino controlled servo system</li>
  ]
  const pillowFlufferInfo = [
    <li>Built with Unity and Maya</li>,
    <li>Bootstrap components for style</li>,
    <li>Hosted using Google Firebase</li>
  ]
  const portfolioSiteInfo = [
    <li>Built with ReactJS and Typescript</li>,
    <li>Bootstrap components for style</li>,
    <li>Hosted using Google Firebase</li>
  ]
  const twoTapTimerInfo = [
    <li>Built with React Native and Nativebase</li>,
    <li>start a timer in as little as 2 taps</li>
  ]

    return(
        <div className="App">
            <Container >
            <Row className="" style={{alignItems:"center", justifyContent:"center"}}>

                <CardColumns style={{}}>
                {/* OLD HARD CODED CARD */}

                {/* RAH card  */}
                <ProjectCard 
                    title="UAH Machine Learning Air Hockey Table" 
                    body="body text here!!" 
                    projectImages={siteImages.mlAirHockey} 
                    modalList={mlAirHockeyInfo} 
                    modalLink="https://github.com/ChargerAirHockey?tab=repositories"
                    >

                </ProjectCard>
                
                {/* Pillowfluffer card */}
                <ProjectCard 
                    title="Pillow Fluffer 2000" 
                    body="body text here!!" 
                    projectImages={siteImages.pillowFluffer} 
                    modalList={pillowFlufferInfo} 
                    modalLink="https://github.com/JordanPat/pillow_fluffer_2000"
                    >

                </ProjectCard>

                {/* <!--Portfolio card --> */}
                <ProjectCard 
                    title="Jordan Barrilleaux Portfolio Site" 
                    body="body text here!!" 
                    projectImages={siteImages.portfolioSite} 
                    modalList={portfolioSiteInfo} 
                    modalLink="https://github.com/JordanPat/JordansSite"
                    >

                </ProjectCard>
                
                {/* <!-- Easy Timer Card--> */}
                <ProjectCard 
                    title="COMING SOON- Easy Timer React Native App" 
                    body="body text here!!" 
                    projectImages={siteImages.twoTapTimer} 
                    modalList={twoTapTimerInfo} 
                    modalLink="https://github.com/JordanPat/"
                    >

                </ProjectCard>
                </CardColumns>
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

export default Home