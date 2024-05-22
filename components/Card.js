export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this.image = data.link;
    this.text = data.name;
    this.cardTemplate = document.querySelector(cardSelector).content;
    this.handleImageClick = handleImageClick;
    this._cardElement = this.cardTemplate
      .querySelector(".locations__card")
      .cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._deleteButton = this._cardElement.querySelector(".card__delete-icon");
    this._likeButton = this._cardElement.querySelector(".card__like-icon");
  }

  //event listeners for cards
  _setEventListeners() {
    this._likeButton.addEventListener("click", this._likeCard);
    this._deleteButton.addEventListener("click", this._removeCard);
    this._cardImage.addEventListener("click", this.handleImageClick);
  }

  _likeCard(e) {
    e.target.classList.toggle("card__like-icon_clicked");
  }

  _removeCard(e) {
    const cardElement = e.target.closest(".card");
    cardElement.remove();
  }

  createCard() {
    this._setEventListeners();

    this._cardImage.src = this.image;
    this._cardImage.alt = this.text;
    this._cardTitle.textContent = this.text;

    return this._cardElement;
  }
}
