import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this.submit = submitFunction;
    this.form = this.modal.querySelector(".form");
    this.inputs = this.form.querySelectorAll(".form__input");
  }

  setUpDeleteModal = (cardObj) => {
    this.currentId = cardObj.id;
    this.removeHandler = cardObj._removeCard;
    super.openModal();
  };

  _getInputValues() {
    const inputvalues = {};
    this.inputs.forEach((input) => {
      const propertyName = input.name;
      inputvalues[input.name] = input.value;
    });
    return inputvalues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submit(e, this._getInputValues());
    });
  }
}
