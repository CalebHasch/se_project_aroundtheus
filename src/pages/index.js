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
  profileImage,
  profilePicForm,
  editForm,
  addCardForm,
  modalImage,
  modalTitle,
} from "../utils/constants.js";

const popups = {
  cardPopup: new PopupWithForm("#add-card-modal", renderNewCard),
  profilePopup: new PopupWithForm("#edit-profile-modal", editProfile),
  deleteCardPopup: new PopupWithForm("#delete-card-modal", deleteCard),
  profilePicPopup: new PopupWithForm("#profile-pic-modal", editProfilePic),
  locationPopup: new PopupWithImage("#location-modal"),
};

const userInfo = new UserInfo(
  {
    nameSelector: ".profile__name",
    descriptionSelector: ".profile__subtitle",
  },
  profileImage
);
const cardSection = new Section({ renderer: createCard }, ".locations");

// validation class
const formValidators = {
  editFormValidation: new FormValidator(validationObj, editForm),
  cardFormValidation: new FormValidator(validationObj, addCardForm),
  picFormValidation: new FormValidator(validationObj, profilePicForm),
};

// initail setup
for (let popup in popups) {
  popups[popup].setEventListeners();
}

for (let form in formValidators) {
  formValidators[form].enableValidation();
}

api
  .getAll()
  .then((data) => {
    userInfo.setUserInfo(data[0]);
    userInfo.setUserImage(data[0]);
    return data;
  })
  .then((data) => {
    popups.profilePopup.setInputs(userInfo.getUserInfo());
    cardSection.renderItems(data[1]);
  });

// edits the user profile based off form inputs
function editProfile(e, { name, description }) {
  api
    .updateUserInfo({ name, description })
    .then(() => {
      userInfo.setUserInfo({ name, description });
      popups.profilePopup.closeModal();
      popups.profilePopup.renderLoading();
    })
    .catch((err) => console.error(err));
}

function editProfilePic(e, { avatar }) {
  api
    .updateUserImage({ avatar })
    .then(() => {
      userInfo.setUserImage({ avatar });
      popups.profilePicPopup.closeModal();
      popups.profilePicPopup.renderLoading();
      e.target.reset();
      formValidators.picFormValidation.toggleSubmitButton();
    })
    .catch((err) => console.error(err));
}

// renders card created by user
function renderNewCard(e, { title, link }) {
  const cardData = { name: title, link };

  api
    .postCard(cardData)
    .then((data) => {
      cardSection.addItem(data, "prepend");
      e.target.reset();
      formValidators.cardFormValidation.toggleSubmitButton();
      popups.cardPopup.closeModal();
      popups.cardPopup.renderLoading();
      return data;
    })
    .catch((err) => console.error(err));
}

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#locations__card",
    () => {
      popups.locationPopup.openModal(cardData, modalImage, modalTitle);
    },
    popups.deleteCardPopup.setUpDeleteModal,
    toggleLike
  ).createCard();
  return cardElement;
}

function deleteCard() {
  api
    .deleteCard(this.currentId)
    .then(() => {
      popups.deleteCardPopup.removeHandler();
      popups.deleteCardPopup.closeModal();
      popups.deleteCardPopup.renderLoading();
    })
    .catch((err) => console.error(err));
}

function toggleLike(card) {
  if (card.isLiked) {
    api
      .dislikeCard(card.id)
      .then(() => {
        card.isLiked = false;
      })
      .catch((err) => console.error(err));
  } else {
    api
      .likeCard(card.id)
      .then(() => {
        card.isLiked = true;
      })
      .catch((err) => console.error(err));
  }
}

//event listener for profile edit form
editButton.addEventListener("click", function () {
  popups.profilePopup.openModal();
  formValidators.editFormValidation.resetValidation();
});

//event listener for location add form
addButton.addEventListener("click", function () {
  popups.cardPopup.openModal();
});

//event listener for profile pic form
profileImage.addEventListener("click", function () {
  popups.profilePicPopup.openModal();
});
