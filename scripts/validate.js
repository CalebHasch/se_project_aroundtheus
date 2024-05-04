const validationObj = {
  formSelector: ".form",
  fieldSelector: ".form__field",
  inputSelector: ".form__input",
  errorSelector: ".form__error",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_invalid",
};

// input validity functions
function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));

  formList.forEach((form) => {
    const fieldList = Array.from(document.querySelectorAll(obj.fieldSelector));
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    const button = form.querySelector(obj.submitButtonSelector);

    fieldList.forEach((field) => {
      addInputEvents(obj, field, inputList, button);
    });
  });
}

function addInputEvents(obj, field, inputList, button) {
  const input = field.querySelector(obj.inputSelector);

  input.addEventListener("input", () => {
    checkValidity(obj, field, input);
    toggleSubmitButton(obj, inputList, button);
  });
}

function checkValidity(obj, field, input) {
  const errorElement = field.querySelector(obj.errorSelector);

  if (!input.validity.valid) {
    showError(obj, errorElement, input);
  } else {
    hideError(obj, errorElement, input);
  }
}

function checkValidityOnOpen(obj, modal) {
  const form = modal.querySelector(obj.formSelector);

  const button = form.querySelector(obj.submitButtonSelector);
  const inputList = Array.from(form.querySelectorAll(obj.inputSelector));

  toggleSubmitButton(obj, inputList, button);
}

function showError(obj, errorElement, input) {
  const errorMessage = input.validationMessage;

  input.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
}

function hideError(obj, errorElement, input) {
  input.classList.remove(obj.inputErrorClass);
  errorElement.textContent = "";
}

function toggleSubmitButton(obj, inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.classList.add(obj.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(obj.inactiveButtonClass);
    button.disabled = false;
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

enableValidation(validationObj);
