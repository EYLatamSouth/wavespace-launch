class Oscilator {
  constructor(variation = 0.4, max = 150, speed = 0.02) {
    this.variation = variation;
    this.max = max;
    this.speed = speed;
    this.a = 0;
    this.amp = this._getMax();
  }
  getAmp() {
    this.a += this.speed;
    if (this.a >= 2.0) {
      this.a = 0;
      this.amp = this._getMax();
    }
    return this.amp * Math.sin(this.a * Math.PI);
  }
  _getMax() {
    return Math.random() * this.max  * this.variation + this.max * (1 - this.variation);
  }
}

export default Oscilator;