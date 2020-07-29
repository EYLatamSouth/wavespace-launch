import React, { Component } from 'react';
import styles from './Progress.scss';
import { StyleSheet, css } from 'aphrodite';
import { vanishOut } from 'react-magic';

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
      <div className={styles.container}>
        <div className={styles.outer}>
          <span>{this.props.text}</span>
        </div>
        <div className={styles.inner}>
          <div className={animatedClass}>
            <span style={spanStyle}>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;