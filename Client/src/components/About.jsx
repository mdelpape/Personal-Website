import React, {useState} from 'react';
import selfie from './8CAB3983-A328-46E4-B2B6-935FB717E002_1_105_c.jpeg'

export default function About (setContent) {


  setContent (
    <div id="test">
      <div className='aboutContainer'>
        <img src={selfie} style={{width : '200px',position:'relative'}}/>
        <div className='textContainer'>
          <p style={{color:'white'}}>Hello!! My name's Michael. I am a highly skilled full-stack engineer with a primary focus on front-end development. Throughout my career, I have successfully built a wide range of applications, ranging from sophisticated ecommerce product pages to immersive multiplayer environments for video games.<br/>

My passion lies in solving complex problems using innovative and efficient approaches. I thrive on thinking outside the box and pride myself on offering a unique perspective when tackling challenges in the software engineering realm.<br/>

If you're interested in discussing my past projects or collaborating on your own ventures, please don't hesitate to reach out. I am eagerly looking forward to our conversation.</p>
        </div>
      </div>
    </div>
  );
}
