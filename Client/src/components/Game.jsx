import React, {useState} from 'react';

export default function Game (setContent) {
  var count = '0';

  var createPlayer = (event) => {
    // event.preventDefault();
    var player = document.createElement('div');
    player.className = `player`;
    player.id = `${count++}`
    console.log(player.id)
    console.log(count)

    console.log(player);
    var arena = document.getElementById('arena')
    arena.appendChild(player);
  }


  function moveObject(event) {

    var movableElement = document.getElementById(`${count-1}`);
    var containerWidth = document.getElementById("arena").offsetWidth;
    var containerHeight = document.getElementById("arena").offsetHeight;
    var currentPosition = movableElement.getBoundingClientRect();

    switch (event.key) {
      case "ArrowUp":
        if (currentPosition.top > 0) {
          movableElement.style.top = currentPosition.top - 10 + "px";
        }
        break;
      case "ArrowDown":
        if (currentPosition.bottom < containerHeight) {
          movableElement.style.top = currentPosition.top + 10 + "px";
        }
        break;
      case "ArrowLeft":
        if (currentPosition.left > 0) {
          movableElement.style.left = currentPosition.left - 10 + "px";
        }
        break;
      case "ArrowRight":
        if (currentPosition.right < containerWidth) {
          movableElement.style.left = currentPosition.left + 10 + "px";
        }
        break;
    }
}

  setContent (
    <div id="Game">
      <h1>Game</h1>
      <p id = 'object'>Hello</p>
      <div id = 'arena'>
        <button onClick = {(event) => {
          event.preventDefault();
          createPlayer();
          document.addEventListener("keydown", moveObject);

          }}>Play</button>
      </div>
    </div>
  );
}
