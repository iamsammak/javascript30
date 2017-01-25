class Control {
  constructor(el, variable) {
    this.el = el;
    this.variable = variable;
    this.suffix = this.el.dataset.suffix || '';
    this.bindEvents();
  }

  bindEvents() {
    this.el.addEventListener('change', this.updateValue.bind(this));
    this.el.addEventListener('mousemove', this.updateValue.bind(this));
  }

  updateValue(e) {
    document.documentElement.style.setProperty(`--${this.variable}`, this.el.value + this.suffix);
  }
}

export default Control;
