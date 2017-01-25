class Gallery {
  constructor(el) {
    this.el = el;
    this.panels = [];
  }

  push(panel) {
    this.panels.push(panel);
    this.el.appendChild(panel.el);
  }
}

export default Gallery;
