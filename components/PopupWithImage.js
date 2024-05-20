import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  openModal({ name, link }) {
    this.title = this.nextElementSibling.textContent;

    this.src = link;
    this.alt = name;
    modalTitle.textContent = name;
    super.openModal();
  }
}
