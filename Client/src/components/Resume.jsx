import React, {useState} from 'react';
import ResumeImg from "../tools/michaelResume.png"

export default function Resume (setContent) {


  setContent (
    <div id="ResumeContainer">
      {/* <h1 style = {{color: 'white'}}>Resume</h1> */}
      <img id = 'resumeImg'src = {ResumeImg}/>
    </div>
  );
}
