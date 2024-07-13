import React from 'react';
import './Popup.css';

const Popup = () => {
  const handleTryNow = () => {
    alert('Trying Claude 3.5 Sonnet!');
  };

  const handleDismiss = () => {
    document.querySelector('.ad').style.display = 'none';
  };

  return (
    <div id="container">
      <div id="header">
        <h1>Help AI Chat Bot</h1>
        <button id="closeBtn" onClick={() => window.close()}>X</button>
      </div>
      <div id="ad-section">
        <h2>Techstack</h2>
        <div className="ad">
          <p>The smartest and fastest AI yet?<br />Invite friends to try Claude 3.5 Sonnet for free!</p>
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
        <p>Sider starts a new chat each time you reopen the sidebar. If you want to resume the last chat, <a href="/">change this in the settings.</a></p>
      </div>
    </div>
  );
};

export default Popup;
