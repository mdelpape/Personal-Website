import React, {useState} from 'react';
import selfie from './8CAB3983-A328-46E4-B2B6-935FB717E002_1_105_c.jpeg'

export default function About (setContent) {


  setContent (
    <div id="test">
      <div>
        <img src={selfie} style={{width : '300px',position:'absolute',top:'20%',left:'20%'}}/>
        <p style={{color:'white'}}>Hello!</p>
      </div>
    </div>
  );
}
