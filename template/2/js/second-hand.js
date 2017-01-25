import Hand from './hand';

class SecondHand extends Hand {
  constructor(clock) {
    super('second', clock);
  }

  calcPercentage(time) {
    const second = time.getSeconds();

    return second / 60;
  }
}

export default SecondHand;
