export default class Popup {
  constructor(popupSelector) {
    this.modal = document.querySelector(popupSelector);
  }

  openModal() {
    this.modal.classList.add("modal_opened");
    this.modal.addEventListener("click", this._handleCloseEvent);
    document.addEventListener("keydown", this._handleCloseEvent);
  }

  closeModal() {
    this.modal.classList.remove("modal_opened");
    this.modal.removeEventListener("click", this._handleCloseEvent);
    document.removeEventListener("keydown", this._handleCloseEvent);
  }

  _handleCloseEvent = (e) => {
    if (e.target.classList.contains("modal") || e.key == "Escape") {
      this.closeModal();
    }
  };

  setEventListeners() {
    const button = this.modal.querySelector(".modal__close");

    button.addEventListener("click", () => this.closeModal());
  }
}
