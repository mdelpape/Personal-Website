import React, { useState } from 'react';
import blueOcean from './1687049639586.jpeg';
import mvp from './246624761-02c44c2b-78d2-4b11-9393-ae599a57943c.gif';
import store from './storeFront_homepage.gif';
import screenShot1 from './Screenshot 2023-06-02 at 7.17.07 PM.png';
import screenShot2 from './Screenshot 2023-06-02 at 7.17.20 PM.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Portfolio(setContent) {


  setContent(
    <div style={{
      overflow: 'auto',
      height: 'calc(100vh - 100px)',
    }}>
      <div style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '40px',
        fontFamily: 'Roboto, sans-serif',
        marginTop: '20px',
      }}>Portfolio</div>
      <div id="Portfolio" style={{
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}>
        <div className='project'>
          <img src={blueOcean} className='projectImg' />
          <a href='https://github.com/Blue-Ocean-Naruto/Village-Sports' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github git' aria-hidden="true"></i>
          </a>
        </div>
        <div className='project'>
          <img src={mvp} className='projectImg' />
          <a href='https://github.com/mdelpape/mvp-Multi-Player' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github git' aria-hidden="true"></i>
          </a>
        </div>
        <div className='project'>
          <img src={store} className='projectImg' />
          <a href='https://github.com/Coconut-Cola-Conundrums/Ecommerce-FEC-1' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github git' aria-hidden="true"></i>
          </a>
        </div>
        <div className='project'>
          {/* <img src={screenShot1} className='projectImg'/> */}
          <img src={screenShot2} className='projectImg' />
          <a href='https://github.com/Audacious-Artichokes/atelier-backend-Reviews' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github git' aria-hidden="true"></i>
          </a>
        </div>
      </div>

    </div>
  );
}
