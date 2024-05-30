import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
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
const deleteCardPopup = new PopupWithForm("#delete-card-modal", deleteCard);
const locationPopup = new PopupWithImage("#location-modal");

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__subtitle",
});
const cardSection = new Section({ renderer: createCard }, ".locations");

// validation class
const editFormValidation = new FormValidator(validationObj, editForm);
const cardFormValidation = new FormValidator(validationObj, addCardForm);

// initail setup
cardPopup.setEventListeners();
profilePopup.setEventListeners();
locationPopup.setEventListeners();
deleteCardPopup.setEventListeners();

api.getInitialCards().then((cards) => cardSection.renderItems(cards));

api.getUserInfo().then((data) => userInfo.setUserInfo(data));

editFormValidation.enableValidation();
cardFormValidation.enableValidation();

// edits the user profile based off form inputs
function editProfile(e, { name, description }) {
  api.updateUserInfo({ name, description });
  userInfo.setUserInfo({ name, description });
  profilePopup.closeModal();
}

// renders card created by user
function renderNewCard(e, { title, link }) {
  const cardData = { name: title, link };

  api.postCard(cardData);
  cardSection.addItem(cardData, "prepend");

  e.target.reset();
  cardFormValidation.toggleSubmitButton();
  cardPopup.closeModal();
}

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#locations__card",
    () => {
      locationPopup.openModal(cardData, modalImage, modalTitle);
    },
    deleteCardPopup.setUpDeleteModal
  ).createCard();
  return cardElement;
}

function deleteCard(e) {
  console.log("delete" + this.currentId);
  api.deleteCard(this.currentId);
  deleteCardPopup.removeHandler();
  deleteCardPopup.closeModal();
}

//event listener for profile edit form
editButton.addEventListener("click", function () {
  profilePopup.openModal();
  editFormValidation.resetValidation();
});

//event listener for location add form
addButton.addEventListener("click", function () {
  cardPopup.openModal();
});

//event listener for delete card modal
