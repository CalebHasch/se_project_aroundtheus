const validationObj = {
  formSelector: ".form",
  fieldSelector: ".form__field",
  inputSelector: ".form__input",
  errorSelector: ".form__error",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_inactive",
  inputErrorClass: "form__input_invalid",
};

// declare buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const profileImage = document.querySelector(".profile__pic");

//declare modal elements
const editForm = document.forms["form-edit-profile"];
const addCardForm = document.forms["form-add-card"];
const profilePicForm = document.forms["form-profile-pic"];
const modalImage = document.querySelector(".location__image");
const modalTitle = document.querySelector(".location__title");

export {
  initialCards,
  validationObj,
  editButton,
  addButton,
  profileImage,
  profilePicForm,
  editForm,
  addCardForm,
  modalImage,
  modalTitle,
};
