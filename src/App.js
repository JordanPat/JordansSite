import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        {/* <!-- !PAGE CONTENT! --> */}
        <div className="w3-content" style={{maxWidth:"1500px"}}>


        {/* <!-- Header --> */}
        <header className="w3-panel w3-center w3-opacity" style={{padding:"128px 16px"}}>

          <h1 className="w3-xlarge w3-red">UNDER CONSTRUCTION!!!</h1>
          
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

        {/* <!-- Prpject Grid --> */}
        <div className="w3-row-padding w3-grayscale" style={{marginBottom:"128px"}}>
          {/* <!--Left Column--> */}
          <div className="w3-half">
            {/* <!--card 1--> */}
            <div className="w3-card w3-center w3-margin" style={{maxWidth:"40em;"}}>
              <div className="w3-display-container w3-text-white">
                <a href="https://github.com/ChargerAirHockey?tab=repositories">
                  <div className="w3-content w3-display-container">
                    <img className="mySlides1" src="/imgs/MLAirHockey/Poster.png" style={{width:"100%", height: "80%"}}/>
                    <img className="mySlides1" src="/imgs/MLAirHockey/AirHockeyModel.jpeg" style={{width:"100%", height: "80%"}}/>
                    <img className="mySlides1" src="/imgs/MLAirHockey/table.jpg" style={{width:"100%", maxHeight: "80%"}}/>
                    <img className="mySlides1" src="/imgs/MLAirHockey/hitrate.png" style={{width:"100%", maxHeight: "80%"}}/>
                    <img className="mySlides1" src="/imgs/MLAirHockey/MLSim.png" style={{width:"100%", maxHeight: "80%"}}/>
                  </div>
                </a>
                <div className="w3-large w3-display-bottomleft w3-padding w3-light-grey">
                  <p style={{fontWeight: "bold"}}>UAH Machine Learning Air Hockey Table</p>
                </div>
              </div>
              <div className="">
                <button onclick="document.getElementById('id01').style.display='block'" className="w3-button w3-black">Details</button>
              </div>
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
                    <img className="mySlides2" src="imgs/PillowFluffer/Overhead.png" style={{width:"100%", height: "80%"}}/>
                    <img className="mySlides2" src="imgs/PillowFluffer/pov.png" style={{width:"100%", height: "80%"}}/>
                    <img className="mySlides2" src="imgs/PillowFluffer/unity.png" style={{width:"100%", height: "80%"}}/>
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
                <img className="" src="/imgs/portfolioSite.png" style={{width:"100%"}}/>
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
                <img className="" src="/imgs/2TapTimer/timerSelect.PNG" style={{width:"100%"}}/>
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
      
      </div>
  
    );
  }
}

export default App;
