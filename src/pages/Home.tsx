import React, {} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Alert, Card, Col, Row } from 'react-bootstrap';

import ProjectCard from '../components/ProjectCard';
import siteImages from "../siteImages.json";


interface HomeProps {

};


const Home: React.FC = () => {

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
            <Row xs={1} md={2} className="" style={{alignItems:"center", justifyContent:"center"}}>

                {/* <Card style={{width: '30rem'}}> */}
                {/* OLD HARD CODED CARD */}

                {/* RAH card  */}
                <ProjectCard 
                    title="UAH Machine Learning Air Hockey Table" 
                    body="Python, TensorFlow, OpenCV, Firmware" 
                    projectImages={siteImages.mlAirHockey} 
                    modalList={mlAirHockeyInfo} 
                    modalLink="https://github.com/ChargerAirHockey?tab=repositories"
                    >

                </ProjectCard>
                <br/>
                {/* Pillowfluffer card */}
                <ProjectCard 
                    title="Pillow Fluffer 2000" 
                    body="C#, Unity, Maya" 
                    projectImages={siteImages.pillowFluffer} 
                    modalList={pillowFlufferInfo} 
                    modalLink="https://github.com/JordanPat/pillow_fluffer_2000"
                    >
                </ProjectCard>
                </Row>
              <Row xs={1} md={2} className="" style={{alignItems:"center", justifyContent:"center"}}>
                <br/>
                {/* <!--Portfolio card --> */}
                <ProjectCard 
                    title="Jordan Barrilleaux Portfolio Site" 
                    body="ReactJS, Typescript"
                    projectImages={siteImages.portfolioSite} 
                    modalList={portfolioSiteInfo} 
                    modalLink="https://github.com/JordanPat/JordansSite"
                    >

                </ProjectCard>
                <br/>
                {/* <!-- Easy Timer Card--> */}
                <ProjectCard 
                    title="Easy Timer Mobile App" 
                    alert={<Alert variant="warning">COMING SOON</Alert>}
                    body="React Native"
                    projectImages={siteImages.twoTapTimer} 
                    modalList={twoTapTimerInfo} 
                    modalLink="https://github.com/JordanPat/twoTapTimer"
                    >

                </ProjectCard>
                <br/>
                {/* <!-- iWorkoutLog Card--> */}
                {/* <ProjectCard 
                    title="iWorkout Log Mobile App" 
                    alert={<Alert variant="warning">COMING SOON</Alert>}
                    body="React Native, Firebase Datastore, Firebase Auth"
                    projectImages={siteImages.iWorkoutLog} 
                    modalList={iWorkoutLogInfo} 
                    modalLink="https://github.com/JordanPat/iWorkoutLog"
                    >

                </ProjectCard> */}

                {/* </Card> */}
            </Row>
            </Container>
            
        </div>
    );
}

export default Home