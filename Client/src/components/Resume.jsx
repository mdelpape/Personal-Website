import React, { useState, useEffect } from 'react';
import ResumeImg from "../tools/michaelResume.png";
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from './MichaelDelPapeResumecopy.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = (setContent) => {

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
      }}>
        Resume
      </div>
      <div id="ResumeContainer">
        <Document file={pdfFile} >
          <Page pageNumber={1} />
        </Document>
      </div>

    </div>
  );
}

export default Resume;
