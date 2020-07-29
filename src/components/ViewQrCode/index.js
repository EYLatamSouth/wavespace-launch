import React from 'react';
import QRCode from 'qrcode.react';

import Wave2 from "../Wave2";
import Logo from "../Logo";

import "./style.scss";

export default function ViewQrCode() {
  return (
    <div>
      <Wave2
        thickness={2}
        scale={0.1}
      />
      <Logo
        absolute={true}
      />
      <div className="code-container">
        <QRCode
          bgColor="#1a1a24"
          fgColor="#fff"
          value="https://wavespacestarter.azurewebsites.net/"
          size={256}
        />
      </div>
    </div>
  );
}