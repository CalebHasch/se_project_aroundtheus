import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

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

//declare modal elements
const editForm = document.forms["form-edit-profile"];
const addCardForm = document.forms["form-add-card"];
const modalImage = document.querySelector(".location__image");
const modalTitle = document.querySelector(".location__title");
const editNameInput = document.querySelector("#form__name");
const editDescriptionInput = document.querySelector("#form__description");
const cardPopup = new PopupWithForm("#add-card-modal", renderNewCard);
const profilePopup = new PopupWithForm("#edit-profile-modal", editProfile);
const locationPopup = new PopupWithImage("#location-modal");

//declare card and profile elements
const formTitleInput = document.querySelector("#form__title");
const formLinkInput = document.querySelector("#form__image-link");
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__subtitle",
});
const cardSection = new Section(
  { items: initialCards, renderer: createCard },
  ".locations"
);

// validation class
const editFormValidation = new FormValidator(validationObj, editForm);
const cardFormValidation = new FormValidator(validationObj, addCardForm);

// initail setup
cardPopup.setEventListeners();
profilePopup.setEventListeners();
locationPopup.setEventListeners();

cardSection.renderItems();

editFormValidation.enableValidation();
cardFormValidation.enableValidation();

// edits the user profile based off form inputs
function editProfile(e, { nameVal, descriptionVal }) {
  e.preventDefault();

  userInfo.setUserInfo({ nameVal, descriptionVal });
  profilePopup.closeModal();
}

// renders card created by user
function renderNewCard(e, { titleVal, linkVal }) {
  e.preventDefault();

  const title = titleVal;
  const imageUrl = linkVal;
  const cardData = { name: title, link: imageUrl };
  const cardElement = createCard(cardData);

  cardSection.addItem(cardElement, "prepend");

  e.target.reset();
  cardFormValidation.resetValidation();
  cardPopup.closeModal();
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#locations__card", () => {
    locationPopup.openModal(cardData);
  }).createCard();
  return cardElement;
}

//event listeners for profile edit form
editButton.addEventListener("click", function () {
  profilePopup.openModal();
  editFormValidation.resetValidation();
});

//event listeners for location add form
addButton.addEventListener("click", function () {
  cardPopup.openModal();
});

// variable exports
export {
  modalImage,
  modalTitle,
  formTitleInput,
  formLinkInput,
  editDescriptionInput,
  editNameInput,
};
