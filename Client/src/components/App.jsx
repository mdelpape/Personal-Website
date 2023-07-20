import React, { useState } from 'react';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import roboPic from './Subject.png'



export default function App() {
  const home =
    (
      <div>
        <div id='home'>
          <h1 id='homeName'>Michael Del Pape</h1>
          <img id='moon' src='https://upload.wikimedia.org/wikipedia/commons/b/b8/Moon_rotating_full_160px.gif' />
        </div>
        <div id='linkContainer'>
          <img id='spaceMan' src='https://i.gifer.com/X5NY.gif' width='100px' />
          <img id='github' src='https://git-scm.com/images/logos/downloads/Git-Logo-White.png' width='70px' onClick={() => {
            window.location.href = 'https://github.com/mdelpape'
          }} />
          <img id='linkedIn' src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png' width='30px' onClick={() => {
            window.location.href = 'https://www.linkedin.com/in/michael-del-pape-6824a9163/'
          }} />

        </div>

      </div>)


  const [content, setContent] = useState(home);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (e) => {
    setMenuOpen(false);
    document.removeEventListener('click', closeMenu);
  };

  const toggleMenu = (e) => {
    e.stopPropagation(); // prevent event from bubbling up
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      // If the menu is opening, add the click event listener
      document.addEventListener('click', closeMenu);
    } else {
      // If the menu is closing, remove the click event listener
      document.removeEventListener('click', closeMenu);
    }
  };

  const menuClick = (e) => {
    e.stopPropagation(); // prevent event from bubbling up when clicking within the menu
  }

  return (
    <div id="App">
      <div id='head'>
        <img src = {roboPic} style={{width:'100px',marginLeft:'20px'}}></img>
        {/* <header id='name'>Michael Del Pape</header> */}
        {!menuOpen && (
          <i onClick={toggleMenu} className="fa fa-bars burger" aria-hidden="true"></i>
        )}
        {menuOpen && (
          <div id='menu' onClick={menuClick}>
            <p id='navTitle' onClick={() => { setContent(home); setMenuOpen(false); }}>Home</p>
            <p id='navTitle' onClick={() => { Resume(setContent); setMenuOpen(false); }}>Resume</p>
            <p id='navTitle' onClick={() => { Portfolio(setContent); setMenuOpen(false); }}>Portfolio</p>
            <p id='navTitle' onClick={() => { About(setContent); setMenuOpen(false); }}>About</p>
            {/* <p id='navTitle' onClick={() => { Contact(setContent); setMenuOpen(false); }}>Contact</p> */}
          </div>
        )}
      </div>
      <div id='content'>
        {content}
      </div>
    </div>
  );
}
