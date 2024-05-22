import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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
const closeButtons = document.querySelectorAll(".modal__close");

//declare modal elements
const editForm = document.forms["form-edit-profile"];
const addCardForm = document.forms["form-add-card"];
const modalImage = document.querySelector(".location__image");
const modalTitle = document.querySelector(".location__title");
const editModal = document.querySelector("#edit-profile-modal");
const addCardModal = document.querySelector("#add-card-modal");
const locationModal = document.querySelector("#location-modal");
const editNameInput = document.querySelector("#form__name");
const editDescriptionInput = document.querySelector("#form__description");
const cardPopup = new Popup("#add-card-modal");
const profilePopup = new Popup("#edit-profile-modal");
const locationPopup = new PopupWithImage("#location-modal");
let currentModal;

//declare card and profile elements
const locations = document.querySelector(".locations");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__subtitle");
const formTitle = document.querySelector("#form__title");
const formImage = document.querySelector("#form__image-link");
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__subtitle",
});

// validation class
const editFormValidation = new FormValidator(validationObj, editForm);
const cardFormValidation = new FormValidator(validationObj, addCardForm);

function closeModalEvent(e) {
  if (e.target.classList.contains("modal") || e.key == "Escape") {
    closeModal(currentModal);
  }
}

function openModal(modal) {
  currentModal = modal;
  modal.classList.add("modal_opened");
  modal.addEventListener("click", closeModalEvent);
  document.addEventListener("keydown", closeModalEvent);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("click", closeModalEvent);
  document.removeEventListener("keydown", closeModalEvent);
}

function openLocationModal(e) {
  openModal(locationModal);

  const image = e.target;
  const imageName = image.nextElementSibling.textContent;

  modalImage.src = image.src;
  modalImage.alt = imageName;
  modalTitle.textContent = imageName;
}

function editProfile(e) {
  e.preventDefault();

  const nameVal = editNameInput.value;
  const descriptionVal = editDescriptionInput.value;

  userInfo.setUserInfo({ nameVal, descriptionVal });
  closeModal(editModal);
}

// renders card created by user
function renderNewCard(e) {
  e.preventDefault();

  const title = formTitle.value;
  const imageUrl = formImage.value;
  const cardData = { name: title, link: imageUrl };
  const cardElement = createCard(cardData);

  locations.prepend(cardElement);

  e.target.reset();
  closeModal(addCardModal);
}

// renders default cards
function renderCards(data) {
  data.forEach((item) => {
    const cardElement = createCard(item);
    locations.append(cardElement);
  });
}

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#locations__card",
    openLocationModal
  ).createCard();
  return cardElement;
}

renderCards(initialCards);

//event listener for all close buttons
closeButtons.forEach((button) => {
  const modal = button.closest(".modal");

  button.addEventListener("click", () => closeModal(modal));
});

//event listeners for profile edit form
editButton.addEventListener("click", function () {
  // profilePopup.openModal();
  openModal(editModal);
  editFormValidation.resetValidation();
});
editForm.addEventListener("submit", (e) => {
  editProfile(e);
});

//event listeners for location add form
addButton.addEventListener("click", function () {
  cardPopup.openModal();
});
addCardForm.addEventListener("submit", (e) => {
  renderNewCard(e);
  cardFormValidation.toggleSubmitButton();
});

editFormValidation.enableValidation();
cardFormValidation.enableValidation();
