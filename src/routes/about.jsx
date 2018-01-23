import React from 'react';
import reactLogo from '../assets/react-logo.svg';
import unsplashLogo from '../assets/unsplash-logo.svg';

const About = ({ props }) => {

  return (
    <div>
      <h2 style={{ marginTop: 20 }}>Unsplash Browser</h2> 

      <div>
        <img src={reactLogo} alt="react-logo" style={{ width: 100, display: 'inline-block' }} />
        <img src={unsplashLogo} alt="react-logo" style={{ width: 50, display: 'inline-block' }} />
      </div>

      <p style={{ marginTop: 30 }}>
        Aplikacja testowa do przeglądania obrazów z serwisu unsplash.com
      </p>
      <p>
        Kod aplikacji dostępny na <a href="https://github.com/michal2911/unsplash-browser" target="_blank" rel="noopener noreferrer">GitHub'ie</a>
      </p>

      <h5 style={{ marginTop: 30 }}>Autor</h5>
      <p>
        <a href="https://www.linkedin.com/in/micha%C5%82-chalimoniuk-54b870150/" target="_blank" rel="noopener noreferrer">Michał Chalimoniuk</a>
      </p>
    </div>
  );
};

export default About;
