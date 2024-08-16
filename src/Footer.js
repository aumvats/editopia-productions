// Import React and the CSS file
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h1>Let's edit your <br></br> next pixel excellence.</h1>
      <button className="button-style" onClick={() => window.location.href = '#schedule'}>Schedule a call</button>
      <nav><br></br>
    <a className="footer-link" href="https://www.linkedin.com/company/editopia-production/" title="LinkedIn">
    <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
    </a>
    <a className="footer-link" href="https://www.instagram.com/editopia.production/" title="Instagram">
    <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
    </a>  
</nav>

    </footer>
  );
};

export default Footer;
