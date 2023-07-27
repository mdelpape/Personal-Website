import React, { useState, useRef, useEffect } from 'react';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Canvas from './Canvas.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import roboPic from './Subject.png'



export default function App() {
  const canvasRef = useRef(null);
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


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [content, setContent] = useState(home);
  const [menuOpen, setMenuOpen] = useState(false);
  const [canvasActive, setCanvasActive] = useState(false);
          console.log(canvasActive)
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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



  const mouse = {
    x: null,
    y: null,
  }

  useEffect(() => {
    if (document.querySelector('.canvas') && canvasActive) {
      var canvas = canvasRef.current;
      if (canvas) {
        canvas.width = 2000;
        canvas.height = 2000;
        var c = canvas.getContext('2d');
        c.fillStyle = 'blue'
        c.beginPath();
        c.arc(100, 100, 20, 0, Math.PI * 2);
        c.fill();
      }
      canvas.addEventListener('click', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        drawCircle();

      })
      function drawCircle() {
        c.fillStyle = 'blue';
        c.beginPath();
        c.arc(mouse.x, mouse.y - 100, 20, 0, Math.PI * 2);
        c.fill();
        console.log('drew circle')
      }

    }
  }, [content]);



  return (
    <div id="App">
      <div id='head'>
        <img src={roboPic} style={{ width: '100px', marginLeft: '20px' }} id='prof' onClick={() => { setContent(home) }}></img>

        {windowWidth <= 500 && (
          !menuOpen && (
            <i onClick={toggleMenu} className="fa fa-bars burger" aria-hidden="true"></i>
          )
        )}
        {menuOpen && (
          <div id='menu' onClick={menuClick}>
            <p id='navTitle' onClick={() => { setContent(home); setCanvasActive(false); setMenuOpen(false); }}>Home</p>
            <p id='navTitle' onClick={() => { Resume(setContent); setCanvasActive(false); setMenuOpen(false); }}>Resume</p>
            <p id='navTitle' onClick={() => { Portfolio(setContent); setCanvasActive(false); setMenuOpen(false); }}>Portfolio</p>
            <p id='navTitle' onClick={() => { About(setContent); setCanvasActive(false); setMenuOpen(false); }}>About</p>
            <p id='navTitle' onClick={() => { About(setContent); setCanvasActive(true); setMenuOpen(false); }}>Canvas</p>

          </div>
        )}
        {windowWidth >= 500 && (
          <div id='menuContainer'>
            <p id='navTitle' onClick={() => { setContent(home); setCanvasActive(false); }}>Home</p>
            <p id='navTitle' onClick={() => { Resume(setContent); setCanvasActive(false); }}>Resume</p>
            <p id='navTitle' onClick={() => { Portfolio(setContent); setCanvasActive(false); }}>Portfolio</p>
            <p id='navTitle' onClick={() => { About(setContent); setCanvasActive(false); }}>About</p>
            <p id='navTitle' onClick={() => { Canvas(setContent, canvasRef); setCanvasActive(true); }}>Canvas</p>
          </div>
        )}
      </div>
      <div id='content'>
        {content}
      </div>
    </div>
  );
}
