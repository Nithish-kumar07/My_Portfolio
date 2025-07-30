import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./qrcode.css";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="qr-container">
      <h2 className="qr-title">QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text to generate QR code"
        value={inputValue}
        onChange={handleInputChange}
        className="qr-input"
      />
      <div className="qr-box">
        {inputValue && (
          <QRCodeCanvas value={inputValue} size={256} className="qr-image" />
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
