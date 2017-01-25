import Hand from './hand';

class MinuteHand extends Hand {
  constructor(clock) {
    super('minute', clock);
  }

  calcPercentage(time) {
    const minute = time.getMinutes();

    return minute / 60;
  }
}

export default MinuteHand;
