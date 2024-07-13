import React from 'react'
import './Header.css'
import logo from '../img/TechStack logo.png';
const Header = () => {
  return (
    <div id="header">
        <img src={logo} id='header-img'></img>
        <h1>Help AI Chat Bot</h1>
        <button id="closeBtn" onClick={() => window.close()}>X</button>
      </div>
  )
}

export default Header;