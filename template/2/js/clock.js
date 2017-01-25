import HourHand from './hour-hand';
import MinuteHand from './minute-hand';
import SecondHand from './second-hand';

const clocks = [];
let clockInterval = setInterval(() => {
  clocks.forEach( clock => clock.update() );
}, 1000);

class Clock {
  constructor(el, timezone) {
    this.el = el;
    this.timezone = timezone;
    this.hands = [
      new HourHand(this),
      new MinuteHand(this),
      new SecondHand(this)
    ];

    clocks.push(this);
  }

  update() {
    this.currentTime = new Date;
    this.updateHoursForTimezone();
    this.updateHands();
  }

  updateHoursForTimezone() {
    if( this.timezone !== undefined ) {
      this.currentTime.setHours( this.currentTime.getUTCHours() + this.timezone );
    }
  }

  time() {
    return this.currentTime;
  }

  updateHands() {
    this.hands.forEach( hand => hand.update() );
  }
}

export default Clock;
