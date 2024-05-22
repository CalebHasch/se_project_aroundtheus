let popup;

export default class Popup {
  constructor(popupSelector) {
    this.modal = document.querySelector(popupSelector);
    popup = this;
  }

  openModal() {
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
    console.log(popup);
    if (e.target.classList.contains("modal") || e.key == "Escape") {
      popup.closeModal;
      console.log("check");
    }
  }

  setEventListeners() {
    const button = this.modal.closest(".closeButton");

    button.addEventListener("click", () => this.modal.closeModal());
    document.addEventListener("keydown", this._handleEscClose());
    this.modal.addEventListener("click", this.modal._handleEscClose());
  }
}
