// input validity functions
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".form"));

  formList.forEach((form) => {
    const fieldList = Array.from(document.querySelectorAll(".form__field"));
    const inputList = Array.from(form.querySelectorAll(".form__input"));
    const button = form.querySelector(".form__submit-button");

    fieldList.forEach((field) => {
      addInputEvents(field, inputList, button);
    });
  });
}

function addInputEvents(field, inputList, button) {
  const input = field.querySelector(".form__input");

  input.addEventListener("input", () => {
    checkValidity(field, input);
    toggleSubmitButton(inputList, button);
  });
}

function checkValidity(field, input) {
  const errorElement = field.querySelector(".form__error");

  if (!input.validity.valid) {
    showError(errorElement, input);
  } else {
    hideError(errorElement, input);
  }
}

function checkValidityOnOpen(modal) {
  const form = modal.querySelector(".form");

  if (form) {
    const button = form.querySelector(".form__submit-button");
    const inputList = Array.from(form.querySelectorAll(".form__input"));

    toggleSubmitButton(inputList, button);
  }
}

function showError(errorElement, input) {
  const errorMessage = input.validationMessage;

  input.classList.add("form__input_invalid");
  errorElement.textContent = errorMessage;
}

function hideError(errorElement, input) {
  input.classList.remove("form__input_invalid");
  errorElement.textContent = "";
}

function toggleSubmitButton(inputList, button) {
  if (hasInvalidInput(inputList)) {
    button.classList.add("form__submit-button_inactive");
    button.disabled = true;
  } else {
    button.classList.remove("form__submit-button_inactive");
    button.disabled = false;
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

enableValidation();
