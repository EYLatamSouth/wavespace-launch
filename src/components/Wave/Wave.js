import React, { Component } from 'react';
import styles from './Wave.scss';
import SiriWave from 'siriwavejs/siriwave';
import { setTimeout } from 'timers';

class Wave extends Component {
  rand(min = 0.05, max = 0.2) {
    return Math.random() * (max - min) + min;
  }
  componentDidMount() {
    const siriWave = new SiriWave({
      container: document.getElementById(this.props.containerId || 'wave'),
      width: this.props.width || 640,
      height: this.props.height || 200,
      speed: this.props.speed || 0.1,
      amplitude: this.props.amplitude || 1,
      frequency: this.props.frequency || 1,
      color: this.props.color || '#fff',
      cover: this.props.cover || false,
      autostart: this.props.autostart || false,
      speedInterpolationSpeed: this.props.speedInterpolationSpeed || 0.2,
      amplitudeInterpolationSpeed: this.props.amplitudeInterpolationSpeed || 1
    });
    if (this.props.changeSpeedInterval) {
      setInterval(() => {
        siriWave.setSpeed(this.rand(this.props.minSpeed, this.props.maxSpeed));
      }, 1000 * this.props.changeSpeedInterval);
    }
    setTimeout(() => {
      siriWave.setSpeed(this.props.speed);
    }, 300);
  }
  render() {
    return (
      <div id={this.props.containerId || 'wave'} className={styles.container}></div>
    );
  }
}

export default Wave;