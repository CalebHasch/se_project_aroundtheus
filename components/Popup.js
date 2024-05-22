let currentPopup;

export default class Popup {
  constructor(popupSelector) {
    this.modal = document.querySelector(popupSelector);
  }

  openModal() {
    currentPopup = this;

    this.modal.classList.add("modal_opened");
    this.modal.addEventListener("click", this._handleEscClose);
    document.addEventListener("keydown", this._handleEscClose);
  }

  closeModal() {
    this.modal.classList.remove("modal_opened");
    this.modal.removeEventListener("click", this._handleEscClose);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.target.classList.contains("modal") || e.key == "Escape") {
      currentPopup.closeModal();
    }
  }

  setEventListeners() {
    const button = this.modal.querySelector(".form__close-button");

    button.addEventListener("click", () => this.closeModal());
  }
}
