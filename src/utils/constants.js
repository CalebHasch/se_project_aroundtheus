const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

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
