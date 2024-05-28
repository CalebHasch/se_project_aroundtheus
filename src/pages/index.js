import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { api } from "../components/Api.js";

import {
  initialCards,
  validationObj,
  editButton,
  addButton,
  editForm,
  addCardForm,
  modalImage,
  modalTitle,
} from "../utils/constants.js";

const cardPopup = new PopupWithForm("#add-card-modal", renderNewCard);
const profilePopup = new PopupWithForm("#edit-profile-modal", editProfile);
const locationPopup = new PopupWithImage("#location-modal");

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

api.getUserInfo();

editFormValidation.enableValidation();
cardFormValidation.enableValidation();

// edits the user profile based off form inputs
function editProfile(e, { name, description }) {
  userInfo.setUserInfo({ name, description });
  profilePopup.closeModal();
}

// renders card created by user
function renderNewCard(e, { title, link }) {
  const cardData = { name: title, link };

  cardSection.addItem(cardData, "prepend");

  e.target.reset();
  cardFormValidation.toggleSubmitButton();
  cardPopup.closeModal();
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#locations__card", () => {
    locationPopup.openModal(cardData, modalImage, modalTitle);
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
