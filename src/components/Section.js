export default class Section {
  constructor({ renderer }, classSelector) {
    this.renderer = renderer;
    this.container = document.querySelector(classSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }

  addItem(element, method = "append") {
    const card = this.renderer(element);
    this.container[method](card);
  }
}
