import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submitFunction = submitFunction();
    this.form = this.querySelector("form");
  }

  _getInputValues() {
    const inputvalues = {
      link: document.querySelector("#form__image-link"),
      name: document.querySelector("#form__name"),
      title: document.querySelector("#form__title"),
      description: document.querySelector("#form__description"),
    };
    return inputvalues;
  }

  setEventListeners() {
    super(setEventListeners);
    this.form.addEventListener("submit", this.submitFunction());
  }
}
