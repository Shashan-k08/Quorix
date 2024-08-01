import React from 'react'
import './Header.css'
import logo from '../img/icon-1.png';
const Header = () => {
  return (
    <div id="header">
        <img src={logo} alt='' id='header-img'></img>
        <h1>Smart Chat Bot</h1>
        <button id="closeBtn" onClick={() => window.close()}>X</button>
      </div>
  )
}

export default Header;