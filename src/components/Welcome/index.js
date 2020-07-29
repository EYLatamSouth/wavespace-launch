import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { vanishIn } from 'react-magic';

import "./style.scss";

import Skyline from "../../assets/img/skyline.svg";
import SkylineAlt from "../../assets/img/skyline-alt.svg";

const animated = StyleSheet.create({
  magic: {
    animationName: vanishIn,
    animationDuration: '1.2s'
  }
});

class Welcome extends Component {
  render() {
    let image;
    if (this.props.full) {
      image = <img src={SkylineAlt} height="3240" alt="Welcome to wavespace LAS" />;
    } else {
      image = <img src={Skyline} height="3240" alt="Welcome to wavespace São Paulo" />;
    }
    return (
      <div className={css(animated.magic)}>
        <div className="welcome-container">
          <div className="skyline">
            <div className="boundary">
              {image}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;