import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <header>
        <div className="logo">* Leverage</div>
        <div className="header-buttons">
          <button className="open-for-work">Open for work</button>
          <button className="start-project">Start a project</button>
        </div>
      </header>
      <main>
        <h1>
          We build 
          <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image-1" className="inline-image" />
          dope
          <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image-2" className="inline-image" />
          sites and brands.
        </h1>
        <p>We are a tight-knit team with 20+ years of experience helping early-stage startups showcase how good their products really are.</p>
        <button className="cta">Let's build something</button>
      </main>
    </div>
  );
};

export default Hero;