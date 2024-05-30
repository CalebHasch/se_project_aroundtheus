export default class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleTrashClick,
    handleLikeClick
  ) {
    this.image = data.link;
    this.text = data.name;
    this.id = data._id;
    this.isLiked = data.isLiked;
    console.log(this.isLiked);
    this.cardTemplate = document.querySelector(cardSelector).content;
    this.handleImageClick = handleImageClick;
    this.handleTrashClick = handleTrashClick;
    this.handleLikeClick = handleLikeClick;
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
    this._likeButton.addEventListener("click", () => {
      this.handleLikeClick(this);
      this._checkedIfLiked();
    });
    this._deleteButton.addEventListener("click", () => {
      this.handleTrashClick(this);
    });
    this._cardImage.addEventListener("click", this.handleImageClick);
  }

  _checkedIfLiked = () => {
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-icon_clicked");
    } else {
      this._likeButton.classList.remove("card__like-icon_clicked");
    }
  };

  _removeCard = () => {
    this._cardElement.remove();
  };

  // create a new card
  createCard() {
    this._setEventListeners();
    this._checkedIfLiked();

    this._cardImage.src = this.image;
    this._cardImage.alt = this.text;
    this._cardTitle.textContent = this.text;

    return this._cardElement;
  }
}
