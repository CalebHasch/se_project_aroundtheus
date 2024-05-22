export default class FormValidator {
  constructor(settingsObj, formElement) {
    this.settingsObj = settingsObj;
    this.form = formElement;
    this._submitButton = this.form.querySelector(
      settingsObj.submitButtonSelector
    );
    this._inputList = Array.from(
      this.form.querySelectorAll(settingsObj.inputSelector)
    );
  }

  enableValidation() {
    this._inputList.forEach((input) => {
      this._addInputEvents(input);
    });
  }

  _addInputEvents(input) {
    input.addEventListener("input", () => {
      this._checkValidity(input);
      this.toggleSubmitButton();
    });
  }

  _checkValidity(input) {
    const errorElement = input.nextSibling.nextSibling;

    if (!input.validity.valid) {
      this._showError(errorElement, input);
    } else {
      this._hideError(errorElement, input);
    }
  }

  resetValidation() {
    this.toggleSubmitButton();

    this._inputList.forEach((input) => {
      this._hideError(input.nextSibling.nextSibling, input);
    });
  }

  _showError(errorElement, input) {
    const errorMessage = input.validationMessage;

    input.classList.add(this.settingsObj.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideError(errorElement, input) {
    input.classList.remove(this.settingsObj.inputErrorClass);
    errorElement.textContent = "";
  }

  toggleSubmitButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this._submitButton.classList.add(this.settingsObj.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this.settingsObj.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
