import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import 'w3-css/w3.css'; // Import the w3.css file


export default function HomePage() {


  return (
  
    <body >
    <div >
    {/* Navbar */}
    <div className="w3-top">
      <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <a id="homeA" href="#home" className="w3-bar-item w3-button"><b>CFTL</b> College of Fast Track Learning</a>
        <div className="w3-right w3-hide-small">
        <Link to="/registration"> <a href="#projects" className="w3-bar-item w3-button">Apply Now</a></Link>
         <a href="#about" className="w3-bar-item w3-button">About</a>
        <Link to="/login"><a href="#contact" className="w3-bar-item w3-button">Login</a></Link>
        </div>
      </div>
    </div>

    {/* Header */}
    <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
      <img className="w3-image" src="https://www.schooleducationgateway.eu/files/jpg11/adobestock_277896487_edited.jpeg" alt="Architecture" width="1500" height="800" />
      <div  className="w3-display-middle w3-margin-top w3-center"> 
      {/* <div id='homeDiv'> */}
        <h1 id='homeH1' className="w3-xxlarge w3-text-white">
          <span className="w3-padding w3-black w3-opacity-min"><b>CFTL</b></span>{' '}
          <span className="w3-hide-small w3-text-light-grey">College of Fast Track Learning</span>
        </h1>
        <Link to="/registration"><div class="center">
<button type="submit" class="btn">
    Apply Now</button> 
</div></Link> </div>
      {/* </div> */}
    </header> 

    
  </div>
  </body>
  );
};


