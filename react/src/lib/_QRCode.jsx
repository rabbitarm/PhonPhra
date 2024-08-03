import React, { useState } from 'react';
import axios from 'axios';
import { qrCodeApi } from '../api/qrCodeApi';

function QRCode() {

  // https://www.qrcode-monkey.com/qr-code-api-with-logo/
  // https://rapidapi.com/qrcode-monkey/api/custom-qr-code-with-logo
  const [qrCodeData, setQRCodeData] = useState('https://www.qrcode-monkey.com');
  const [logoURL, setLogoURL] = useState('https://www.qrcode-monkey.com/img/qr/logos/facebook-circle.svg');
  const [generatedQRCode, setGeneratedQRCode] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.post('https://api.qrcode-monkey.com/qr/custom', {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': { qrCodeApi },
          'X-RapidAPI-Host': 'qrcode-monkey.p.rapidapi.com'
        }
      }, {
        data: qrCodeData,
        config: {
          body      : 'circle',
          logo      : logoURL,
          eye       : 'frame13',
          eyeBall   : 'ball15',
          bodyColor : '#eceef2',
          bgColor   : '#ffffff'
        },
        size     : 300,
        download : false,
        file     : 'svg'
      });
      setGeneratedQRCode(response.data.imageUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <input
        type="text"
        value={qrCodeData}
        onChange={(e) => setQRCodeData(e.target.value)}
        placeholder="Enter data for QR code"
      />
      <input
        type="text"
        value={logoURL}
        onChange={(e) => setLogoURL(e.target.value)}
        placeholder="Enter URL for logo"
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {generatedQRCode && (
        <div>
          <p>Generated QR Code:</p>
          <img src={generatedQRCode} alt="QR Code" />
        </div>
      )}
    </div>
  );

};

export default QRCode;