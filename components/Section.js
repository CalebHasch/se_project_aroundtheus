export default class Section {
  constructor({ items, renderer }, classSelector) {
    this.items = items;
    this.renderer = renderer;
    this.classSelector = classSelector;
  }

  renderItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItems(element, container) {
    container.append(element);
  }
}
