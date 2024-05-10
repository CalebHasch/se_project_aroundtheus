export class FormValidator {
  constructor(settingsObj, formElement) {
    this.settingsObj = settingsObj;
    this.form = formElement;
  }

  _addInputEvents(obj, field, inputList, button) {
    const input = field.querySelector(obj.inputSelector);

    input.addEventListener("input", () => {
      this._checkValidity(obj, field, input);
      this.toggleSubmitButton(obj, inputList, button);
    });
  }

  _checkValidity(obj, field, input) {
    const errorElement = field.querySelector(obj.errorSelector);

    if (!input.validity.valid) {
      this._showError(obj, errorElement, input);
    } else {
      this._hideError(obj, errorElement, input);
    }
  }

  checkValidityOnSubmit(obj, modal) {
    const form = modal.querySelector(obj.formSelector);

    const button = form.querySelector(obj.submitButtonSelector);
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));

    this.toggleSubmitButton(obj, inputList, button);
  }

  _showError(obj, errorElement, input) {
    const errorMessage = input.validationMessage;

    input.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideError(obj, errorElement, input) {
    input.classList.remove(obj.inputErrorClass);
    errorElement.textContent = "";
  }

  toggleSubmitButton(obj, inputList, button) {
    if (this._hasInvalidInput(inputList)) {
      button.classList.add(obj.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(obj.inactiveButtonClass);
      button.disabled = false;
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  enableValidation() {
    const obj = this.settingsObj;
    const form = this.form;

    const fieldList = Array.from(form.querySelectorAll(obj.fieldSelector));
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    const button = form.querySelector(obj.submitButtonSelector);

    fieldList.forEach((field) => {
      this._addInputEvents(obj, field, inputList, button);
    });
  }
}
