import React, { Component } from 'react';
import styles from './Code.scss';
import Wave2 from '../Wave2/Wave2';
import Logo from '../Logo/Logo';
import QRCode from 'qrcode.react';

class Code extends Component {
  render() {
    return (
      <div>
        <Wave2
          color="#ffe600"
          thickness={2}
          scale={0.1}
        />
        <Logo
          absolute={true}
        />
        <div className={styles.container}>
          <QRCode
            bgColor="#4c4c4c"
            fgColor="#FFFFFF"
            value="https://wavespacestarter.azurewebsites.net/"
            size={256}
          />
        </div>
      </div>
    );
  }
}

export default Code;
