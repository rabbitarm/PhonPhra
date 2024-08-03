import React, { useState } from 'react';
import axios from 'axios';
import { qrCodeApi } from '../api/qrCodeApi';

function QRCode() {

  // https://www.qrcode-monkey.com/qr-code-api-with-logo/
  // https://rapidapi.com/qrcode-monkey/api/custom-qr-code-with-logo

  const data = {
    data: "https://www.example.com", // The URL or text to encode
    config: {
      body: "square",
      eye: "frame0",
      eyeBall: "ball0",
      erf1: [],
      erf2: [],
      erf3: [],
      brf1: [],
      brf2: [],
      brf3: [],
      bodyColor: "#000000", // Main body color
      bgColor: "#ffffff",   // Background color
      eye1Color: "#000000", // Color of the first eye (top-left)
      eye2Color: "#000000", // Color of the second eye (top-right)
      eye3Color: "#000000", // Color of the third eye (bottom-left)
      eyeBall1Color: "#000000", // Color of the first eye ball (top-left)
      eyeBall2Color: "#000000", // Color of the second eye ball (top-right)
      eyeBall3Color: "#000000", // Color of the third eye ball (bottom-left)
      logo: "https://www.example.com/logo.png" // URL of the logo image
    },
    size: 300, // Size of the QR code
    download: false,
    file: "png" // Format of the output file
  };
  
  axios.post('https://api.qrcode-monkey.com/qr/custom', data, {
    responseType: 'blob' // This will ensure you get the response as a blob
  })
  .then(response => {
    // Handle the blob response (QR code image)
    console.log(response.data);
  
    // Optionally, save the QR code to a file
    fs.writeFileSync('qrcode.png', response.data, 'binary');
    console.log("QR code saved as qrcode.png");
  })
  .catch(error => {
    console.error("Error generating QR code:", error);
  });

  return (
    <div className='flex flex-col'>
      
    </div>
  );

};

export default QRCode;