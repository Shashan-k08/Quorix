import React from 'react';
import './Popup.css';
import Header from './components/Header';
import logo from './img/TechStack logo.png'
const Popup = () => {
  const handleTryNow = () => {
    alert('Trying Claude 3.5 Sonnet!');
  };

  const handleDismiss = () => {
    document.querySelector('.ad').style.display = 'none';
  };

  return (
    <div id="container">
      <Header/>
      <div id="ad-section">
       <div id='img-box'> <img src={logo} alt='' id='header-img'></img> <h2>Techstack</h2></div>
        <div className="ad">
          <button id="closeBtn2"  onClick={() => window.close()}>X</button>
          <p style={{marginTop:"-4px"}}>The smartest and fastest AI yet?<br />Invite friends to try Claude 3.5 Sonnet <br/> for free!</p>
          <button className="try-btn" onClick={handleTryNow}>Try Now</button>
          <button className="dismiss-btn" onClick={handleDismiss}>Dismiss</button>
        </div>
      </div>
      <div id="main-content">
        <h2>How can I assist you today?</h2>
        <div className="question">Tell me something about the Big Bang so that I can explain it to my 5-year-old child</div>
        <div className="question">Please provide me with IO gift ideas for my friend's birthday</div>
        <div className="question">Generate five catchy titles for my writing about the use case of ChatGPT</div>
      </div>
      <div id="footer">
      <button id="closeBtn2" onClick={() => window.close()}>X</button>
        <p style={{marginTop:"-1px"}}>Sider starts a new chat each time you reopen the sidebar. If you want to resume the last chat, <a href="/">change this in the settings.</a></p>
      </div>
    </div>
  );
};

export default Popup;
