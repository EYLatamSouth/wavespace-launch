import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { vanishOut } from 'react-magic';

import "./style.scss";

const animated = StyleSheet.create({
  magic: {
    animationName: vanishOut,
    animationDuration: '1s',
    animationDelay: '1s'
  }
});

class Progress extends Component {
  render() {
    const width = this.props.percentage || 0;
    const spanStyle = {
      width: `${width}%`
    };
    let animatedClass;
    if (width >= 100) {
      animatedClass = css(animated.magic);
    }
    return (
      <div className="progress-container">
        <div className="outer">
          <span>{this.props.text}</span>
        </div>
        <div className="inner">
          <div className={animatedClass}>
            <span style={spanStyle}>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;