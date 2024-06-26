import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submit = submitFunction;
    this.form = this.modal.querySelector(".form");
    this.inputs = this.form.querySelectorAll(".form__input");
    this.button = this.form.querySelector(".form__submit-button");
    this.buttonText = this.button.textContent;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this.button.textContent = "Saving...";
    } else {
      this.button.textContent = this.buttonText;
    }
  }

  _getInputValues() {
    const inputvalues = {};
    this.inputs.forEach((input) => {
      const propertyName = input.name;
      inputvalues[input.name] = input.value;
    });
    return inputvalues;
  }

  setInputs(inputValues) {
    this.inputs.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submit(this._getInputValues());
    });
  }
}
