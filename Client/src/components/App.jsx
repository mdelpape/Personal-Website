import React, {useState} from 'react';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

export default function App() {
  const home =
    (
    <div>
      <div id = 'home'>
        <h1 id = 'homeName'>Michael Del Pape</h1>
        <img id = 'moon' src = 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Moon_rotating_full_160px.gif'/>
      </div>
      <img id = 'spaceMan'src = 'https://i.gifer.com/X5NY.gif' width = '100px'/>
      <img id = 'github' src = 'https://git-scm.com/images/logos/downloads/Git-Logo-White.png' width = '100px' onClick = {() => {
        window.location.href = 'https://github.com/mdelpape'
      }}/>
    </div>)


  const [content, setContent] = useState(home);

  return (
    <div id="App">
      <div id = 'head'>
        <header id = 'name'>Michael Del Pape</header>
        <div id = 'buttons'>
          <p id = 'navTitle' onClick = {() => {setContent(home)}}>Home</p>
          <p id = 'navTitle' onClick = {() => {Resume(setContent)}}>Resume</p>
          <p id = 'navTitle' onClick = {() => {Portfolio(setContent)}}>Portfolio</p>
          <p id = 'navTitle' onClick = {() => {About(setContent)}}>About</p>
          <p id = 'navTitle' onClick = {() => {Contact(setContent)}}>Contact</p>
        </div>
      </div>
      <div>
        {content}
      </div>
    </div>
  );
}
