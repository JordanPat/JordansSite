import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert, Col, Row } from 'react-bootstrap';

import ProjectCard from '../components/ProjectCard';
import siteImages from "../siteImages.json";


const Home: React.FC = () => {

  const mlAirHockeyInfo = [
    <li key="0">Machine learning paddle arm using tensorflow in python</li>,
    <li key="1">Proportional integral derivative (PID) controlled opponent paddle</li>,
    <li key="2">Puck tracking using OpenCV computer vision</li>,
    <li key="3">Arduino controlled servo system</li>
  ]
  const pillowFlufferInfo = [
    <li key="0">Built with Unity and Maya</li>,
    <li key="1">Bootstrap components for style</li>,
    <li key="2">Hosted using Google Firebase</li>
  ]
  const portfolioSiteInfo = [
    <li key="0">Built with ReactJS and Typescript</li>,
    <li key="1">Bootstrap components for style</li>,
    <li key="2">Hosted using Google Firebase</li>
  ]
  const twoTapTimerInfo = [
    <li key="0">Built with React Native and Nativebase</li>,
    <li key="1">Start a timer in as little as 2 taps</li>
  ]

  return(
    <div className="App">
      <Container>
        <Row xs={1} md={2} style={{alignItems:"center", justifyContent:"center"}}>
          <ProjectCard
            title="UAH Machine Learning Air Hockey Table"
            body="Python, TensorFlow, OpenCV, Firmware"
            projectImages={siteImages.mlAirHockey}
            modalList={mlAirHockeyInfo}
            modalLink="https://github.com/ChargerAirHockey?tab=repositories"
          />
          <ProjectCard
            title="Pillow Fluffer 2000"
            body="C#, Unity, Maya"
            projectImages={siteImages.pillowFluffer}
            modalList={pillowFlufferInfo}
            modalLink="https://github.com/JordanPat/pillow_fluffer_2000"
          />
        </Row>
        <Row xs={1} md={2} style={{alignItems:"center", justifyContent:"center"}}>
          <ProjectCard
            title="Jordan Barrilleaux Portfolio Site"
            body="ReactJS, Typescript"
            projectImages={siteImages.portfolioSite}
            modalList={portfolioSiteInfo}
            modalLink="https://github.com/JordanPat/JordansSite"
          />
          <ProjectCard
            title="Easy Timer Mobile App"
            alert={<Alert variant="warning">COMING SOON</Alert>}
            body="React Native"
            projectImages={siteImages.twoTapTimer}
            modalList={twoTapTimerInfo}
            modalLink="https://github.com/JordanPat/twoTapTimer"
          />
        </Row>
      </Container>
    </div>
  );
}

export default Home
