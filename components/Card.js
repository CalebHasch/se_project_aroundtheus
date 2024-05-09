class Card {
  constructor(data, cardSelector, handleImageClick) {
    this.image = data.image;
    this.text = data.text;
    this.cardSelector = cardSelector;

    handleImageClick();
  }
}
