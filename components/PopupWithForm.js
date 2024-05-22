import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submitFunction = submitFunction();
    this.form = this.querySelector("form");
  }

  _getInputValues() {
    const inputvalues = {
      link: document.querySelector("#form__image-link").value,
      name: document.querySelector("#form__name").value,
      title: document.querySelector("#form__title").value,
      description: document.querySelector("#form__description").value,
    };
    return inputvalues;
  }

  setEventListeners() {
    super(setEventListeners);
    this.form.addEventListener(
      "submit",
      this.submitFunction(this._getInputValues())
    );
  }
}
