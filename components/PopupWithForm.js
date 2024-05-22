import Popup from "./Popup.js";
import {
  editNameInput,
  formLinkInput,
  formTitleInput,
  editDescriptionInput,
} from "../pages/index.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submit = submitFunction;
    this.form = this.modal.querySelector(".form");
  }

  _getInputValues() {
    const inputvalues = {
      linkVal: formLinkInput.value,
      titleVal: formTitleInput.value,
      nameVal: editNameInput.value,
      descriptionVal: editDescriptionInput.value,
    };
    return inputvalues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (e) => {
      this.submit(e, this._getInputValues());
    });
  }
}
