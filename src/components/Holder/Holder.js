import React, { Component } from 'react';
import Wave2 from '../Wave2/Wave2';
import Logo from '../Logo/Logo';

class Holder extends Component {
  render() {
    return (
      <div>
        <Wave2
          color="#ffe600"
          thickness={14}
          scale={0.1}
        />
        <Logo />
      </div>
    );
  }
}

export default Holder;