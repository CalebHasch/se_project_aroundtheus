export default class Popup {
  constructor(popupSelector) {
    this.modal = document.querySelector(popupSelector);
  }

  closeModalEvent(e) {
    if (e.target.classList.contains("modal") || e.key == "Escape") {
      closeModal(this.modal);
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
}
