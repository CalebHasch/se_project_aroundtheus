import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, action) {
    super(popupSelector);
    this._form = this.modal.querySelector(".form");
    this._button = this._form.querySelector(".form__submit-button");
    this._buttonText = this._button.textContent;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Deleting...";
    } else {
      this._button.textContent = this._buttonText;
    }
  }

  setAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    });
  }
}
