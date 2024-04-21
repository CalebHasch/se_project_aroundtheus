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

// declare buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".modal__close");
let likeButtons;
let deleteButtons;

//declare modal elements
const editForm = document.querySelector("#form-edit-profile");
const addCardForm = document.querySelector("#form-add-card");
const modals = document.querySelectorAll(".modal");
const modalImage = document.querySelector(".location__image");
const modalTitle = document.querySelector(".location__title");
const editModal = document.querySelector("#edit-profile-modal");
const addCardModal = document.querySelector("#add-card-modal");
const locationModal = document.querySelector("#location-modal");

//declare card and profile elements
const cardTemplate = document.querySelector("#locations__card").content;
const locations = document.querySelector(".locations");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__subtitle");
const formTitle = document.querySelector("#form__title");
const formImage = document.querySelector("#form__image-link");

let cardImages;

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
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
  console.log("sub");

  const nameVal = document.querySelector("#form__name").value;
  const descriptionVal = document.querySelector("#form__description").value;

  profileName.textContent = nameVal;
  profileDescription.textContent = descriptionVal;
  closeModal(editModal);
}

function createCard(item) {
  let cardElement = cardTemplate
    .querySelector(".locations__card")
    .cloneNode(true);
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  return cardElement;
}

function removeCard(e) {
  const cardElement = e.target.closest(".card");

  cardElement.remove();
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

  const likeButton = cardElement.querySelectorAll(".card__like-icon");
  const deleteButton = cardElement.querySelectorAll(".card__delete-icon");
  const cardImage = cardElement.querySelectorAll(".card__image");
  console.log(likeButton, cardImage, deleteButton);

  addEvent(likeButton, likeCard);
  addEvent(deleteButton, removeCard);
  addEvent(cardImage, openLocationModal);
}

// renders default cards
function renderCards(data) {
  data.forEach((item) => {
    let cardElement = createCard(item);
    locations.append(cardElement);

    likeButtons = document.querySelectorAll(".card__like-icon");
    deleteButtons = document.querySelectorAll(".card__delete-icon");
    cardImages = document.querySelectorAll(".card__image");

    addEvent(likeButtons, likeCard);
    addEvent(deleteButtons, removeCard);
    addEvent(cardImages, openLocationModal);
  });
}

function likeCard(e) {
  e.target.classList.toggle("card__like-icon_clicked");
}

renderCards(initialCards);

//event listener for all close buttons
closeButtons.forEach((button) => {
  const modal = button.closest(".modal");

  button.addEventListener("click", () => closeModal(modal));
});

//event listeners for profile edit form
editButton.addEventListener("click", function () {
  openModal(editModal);
});
editForm.addEventListener("submit", editProfile);

//event listeners for location add form
addButton.addEventListener("click", function () {
  openModal(addCardModal);
});
addCardForm.addEventListener("submit", renderNewCard);

//event listeners for cards
function addEvent(element, action) {
  element.forEach((image) => {
    image.addEventListener("click", action);
  });
}
