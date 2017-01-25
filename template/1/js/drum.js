class Drum {
  constructor(key, sound, drums = {}) {
    this.el = document.querySelector(`.drum.key-${key}`);
    this.sound = new Audio(`./sounds/${sound}.wav`);
    drums[key] = this; //upon every creation of a new drum he updates drums
    this.bindEvents();
  }


  removeTransition(e) {
    if( e.propertyName == 'transform' ) {
      this.el.classList.remove('playing');
    }
  }

  play() {
    this.highlightButton();
    this.playSound();
  }

  highlightButton() {
    this.el.classList.add('playing');
  }

  playSound() {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  bindEvents() {
    this.bindTransitionEnd();
    this.bindClick();
  }

  bindTransitionEnd() {
    this.el.addEventListener('transitionend', e => this.removeTransition(e));
  }

  bindClick() {
    this.el.addEventListener('click', e => this.play() );
  }
}
