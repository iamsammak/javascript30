import Hand from './hand';

class HourHand extends Hand {
  constructor(clock) {
    super('hour', clock);
  }

  calcPercentage(time) {
    const hour = time.getHours() % 12;

    return hour / 12;
  }
}

export default HourHand;
