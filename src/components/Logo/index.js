import React, { Component } from 'react';

import "./style.scss";

class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <span>wave</span>
        <span className="golden">space</span>
        {this.props.full && <small className="light"> | LAS</small>}
      </div>
    );
  }
}

export default Logo;