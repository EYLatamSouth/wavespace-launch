import React, { Component } from 'react';
import styles from './Welcome.scss';
import { StyleSheet, css } from 'aphrodite';
import { vanishIn } from 'react-magic';

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
      image = <img src="/img/skyline-alt.svg" height="3240" alt="Welcome to wavespace LAS" />;
    } else {
      image = <img src="/img/skyline.svg" height="3240" alt="Welcome to wavespace São Paulo" />;
    }
    return (
      <div className={css(animated.magic)}>
        <div className={styles.container}>
          <div className={styles.skyline}>
            <div className={styles.boundary}>
              {image}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;