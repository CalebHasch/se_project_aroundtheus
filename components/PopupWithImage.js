import Popup from "./Popup.js";
import { modalImage, modalTitle } from "../pages/index.js";

export default class PopupWithImage extends Popup {
  openModal({ name, link }) {
    modalImage.src = link;
    modalImage.alt = name;
    modalTitle.textContent = name;
    super.openModal();
  }
}
