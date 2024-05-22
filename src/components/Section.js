export default class Section {
  constructor({ items, renderer }, classSelector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(classSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      const card = this.renderer(item);
      this.addItem(card);
    });
  }

  addItem(element, method = "append") {
    this.container[method](element);
  }
}
