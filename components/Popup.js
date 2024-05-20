export default class Popup {
  constructor(popupSelector) {
    this.modal = document.querySelector(popupSelector);
  }

  _handleEscClose(e) {
    if (e.target.classList.contains("modal") || e.key == "Escape") {
      this.closeModal(this.modal);
    }
  }

  openModal() {
    this.modal.classList.add("modal_opened");
    this.modal.addEventListener("click", closeModalEvent);
    document.addEventListener("keydown", closeModalEvent);
  }

  closeModal() {
    this.modal.classList.remove("modal_opened");
    this.modal.removeEventListener("click", closeModalEvent);
    document.removeEventListener("keydown", closeModalEvent);
  }

  setEventListeners() {
    const button = this.modal.closest(".closeButton");

    button.addEventListener("click", () => this.modal.closeModal());
    document.addEventListener("keydown", this._handleEscClose());
    this.modal.addEventListener("click", this.modal._handleEscClose());
  }
}
