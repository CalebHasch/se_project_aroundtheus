const cardTemplate = document.querySelector("#locations__card").content;

export class Card {
  constructor(data, cardSelector, handleImageClick) {
    this.image = data.link;
    this.text = data.name;
    this.cardSelector = cardSelector;
    this.handleImageClick = handleImageClick;
  }

  //event listeners for cards
  _addClickEvent(element, action) {
    element.addEventListener("click", action);
  }

  _likeCard(e) {
    e.target.classList.toggle("card__like-icon_clicked");
  }

  _removeCard(e) {
    const cardElement = e.target.closest(".card");
    cardElement.remove();
  }

  createCard() {
    const cardElement = cardTemplate
      .querySelector(".locations__card")
      .cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-icon");
    const likeButton = cardElement.querySelector(".card__like-icon");

    this._addClickEvent(likeButton, this._likeCard);
    this._addClickEvent(deleteButton, this._removeCard);
    this._addClickEvent(cardImage, this.handleImageClick);

    cardImage.src = this.image;
    cardImage.alt = this.text;
    cardTitle.textContent = this.text;

    return cardElement;
  }
}
