import React, { useState, useEffect, useRef } from 'react';

const Canvas = (setContent, canvasRef) => {


  setContent(
    <div>
      <canvas className='canvas test' ref={canvasRef}>
      </canvas>
    </div>
  );
  return null;
}

export default Canvas;
