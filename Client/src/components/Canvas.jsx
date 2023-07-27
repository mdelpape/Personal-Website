import React, { useState, useEffect, useRef } from 'react';

const Canvas = (setContent, canvasRef) => {
  // const canvasRef = useRef(null);

  // const mouse = {
  //   x: null,
  //   y: null,
  // }

  // useEffect(() => {
  //   var canvas = canvasRef.current;
  //   if (canvas) {
  //     canvas.width = 2000;
  //     canvas.height = 2000;
  //     var c = canvas.getContext('2d');
  //     c.fillStyle = 'blue'
  //     c.beginPath();
  //     c.arc(100, 100, 20, 0, Math.PI * 2);
  //     c.fill();
  //   }
  //   canvas.addEventListener('click', function (event) {
  //     mouse.x = event.x;
  //     mouse.y = event.y;
  //     drawCircle();

  //   })
  //   function drawCircle() {
  //     c.fillStyle = 'blue';
  //     c.beginPath();
  //     c.arc(mouse.x, mouse.y - 100, 20, 0, Math.PI * 2);
  //     c.fill();
  //     console.log('drew circle')
  //   }
  // }, []);


  setContent(
    <div>
      <canvas className='canvas test' ref={canvasRef}>
      </canvas>
    </div>
  );
  return null;
}

export default Canvas;
