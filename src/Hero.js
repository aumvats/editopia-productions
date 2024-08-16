import React from 'react';
import './Hero.css';
import logo from '/editopia-productions/editopia/src/logo_editopia.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <header>
        <div className="logo">
          
          {<img src={logo} alt='editopia' width="125px" />}

        </div>
          
        <div className="header-buttons">
          <button className="open-for-work">🟢 Open for work</button>
          <button className="start-project">Start a project</button>
        </div>
      </header>
      <main>
        <h1>
          We produce dope videos & graphics.
          {/* <img src="https://images.pexels.com/photos/15487181/pexels-photo-15487181/free-photo-of-hand-holding-a-camera.jpeg" alt="image-1" className="inline-image" /> */}
           
          {/* <img src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image-2" className="inline-image" /> */}
          
        </h1>
        <p>We are a tight-knit team helping early-stage startups showcase how good their brands really are.</p>
        <button className="cta">Let's craft something</button>

        <div className='particle'>
         
          <img src='https://www.pexels.com/photo/abstract-dark-background-with-human-hand-trace-5691695/' alt='particle' />

        </div>
      </main>
    </div>
  );
};

export default Hero;