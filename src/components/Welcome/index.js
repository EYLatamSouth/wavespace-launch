import React, { Component } from 'react';

import "./style.scss";

import Skyline from "../../assets/img/skyline.svg";
import SkylineAlt from "../../assets/img/skyline-alt.svg";

class Welcome extends Component {
  render() {
    let image = this.props.full ? SkylineAlt : Skyline;
    
    return (
      <div className="welcome-container">
        <div className="skyline">
          <div className="boundary">
            <img src={image} width="auto" height="3240" alt="Welcome to São Paulo wavespace" />
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;