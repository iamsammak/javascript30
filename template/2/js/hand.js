class Hand {
  constructor(type, clock) {
    this.el = clock.el.querySelector(`.${type}-hand`);
    this.clock = clock;
    this.rounds = 0;
    this.prevDeg = 0;
  }

  update() {
    this.rotate(this.calcDegrees());
  }

  calcDegrees() {
    let time = this.clock.time();
    const percentage = this.calcPercentage(time);
    return percentage * 360;
  }

  calcPercentage() {
    throw 'needs implemented';
  }

  rotate(deg) {
    if( deg === 0 && this.prevDeg !== 0 )
      this.rounds++;


    this.prevDeg = deg;

    deg = deg - 90;
    deg = this.rounds * 360 + deg;
    this.el.style.transform = `rotate(${deg}deg)`;
  }
}

export default Hand;
