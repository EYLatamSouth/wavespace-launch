import React, { Component } from 'react';
import Oscilator from './Oscilator';

import "./style.scss";

const COUNT = 40;
const WIDTH = window.innerWidth + 450;
const HEIGHT = window.innerHeight;
const BASELINE = HEIGHT * 0.5;
const STEP = Math.ceil(WIDTH / COUNT);

class Wave extends Component {
  fill(points, ...osc) {
    for (let i = 0; i < COUNT; i++) {
      points[i] = this.mixer(...osc);
    }
  }

  mixer() {
    let d = arguments.length;
    let i = d;
    let sum = 0;
    if (d < 1) return 0;
    while (i--) sum += arguments[i].getAmp();
    return sum / d + BASELINE;
  }

  loop(points, ctx, ...osc) {
    /// move points to the left
    for(let i = 0; i < COUNT - 1; i++) {
      points[i] = points[i + 1];
    }
    /// get a new point
    points[COUNT - 1] = this.mixer(...osc);
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    /// render wave
    ctx.beginPath();
    ctx.moveTo(0, points[0]);
    for (let i = 1; i < COUNT; i++) {
      ctx.lineTo(i * STEP, points[i]);
    }
    ctx.stroke();
    window.requestAnimationFrame(() => this.loop(points, ctx, ...osc));
  }

  componentDidMount() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let scale = this.props.scale || 0.7;
    const osc1 = new Oscilator(0.2, HEIGHT * scale, 0.02);
    const osc2 = new Oscilator(0.2, 35, 0.03);
    const osc3 = new Oscilator(0.2, 20, 0.015);
    const buffer = new ArrayBuffer(COUNT * 4);
    const points = new Float32Array(buffer);
    this.fill(points, osc1, osc2, osc3);
    ctx.lineWidth = this.props.thickness || 20;
    ctx.strokeStyle = this.props.color || '#ffd500';
    ctx.fillStyle = '#1a1a24';
    this.loop(points, ctx, osc1, osc2, osc3);
  }
  
  render() { 
    return(
      <div className="wave-container">
        <canvas id={this.props.canvasId || 'wave'}></canvas>
      </div>
    )
  }
}

export default Wave;