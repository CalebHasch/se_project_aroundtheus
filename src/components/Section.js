export default class Section {
  constructor({ items, renderer }, classSelector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(classSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      this.addItem(item);
    });
  }

  addItem(element, method = "append") {
    const card = this.renderer(element);
    this.container[method](card);
  }
}
