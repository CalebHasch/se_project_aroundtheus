import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  openModal({ name, link }, modalImage, modalTitle) {
    modalImage.src = link;
    modalImage.alt = name;
    modalTitle.textContent = name;
    super.openModal();
  }
}
