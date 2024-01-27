// Header.js
import React from 'react';
import './header.css';
import background from '../../assets/background.jpg';
const Header = () => {
  return (
    <header>
        <div className="overlay"></div>
      <img src={background} alt='err'></img>
      <div id='logo'>
        <h1 id='title'>Anıl Eren Ergin</h1>
        <h2 id='subtitle'>Full Stack Developer</h2>
      </div>
      <nav id="navigation">
        <p>Home</p>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
    </header>
  );
};

export default Header;
