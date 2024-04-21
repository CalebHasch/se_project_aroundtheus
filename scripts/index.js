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
const formCloseButton = document.querySelectorAll(".form__close-button");
const imageCloseButton = document.querySelector(".location__close-button");
let likeButtons;
let deleteButtons;

//declare elements
const modalForm = document.querySelectorAll(".modal__form");
const modals = document.querySelectorAll(".modal");
const modalImage = document.querySelector(".location__image");
const modalTitle = document.querySelector(".location__title");
const editModalIndex = 0;
const addCardModalIndex = 1;
const locationModalIndex = 2;
const cardTemplate = document.querySelector("#locations__card").content;
const locations = document.querySelector(".locations");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__subtitle");

let cardImages;

function openModal(index) {
  modals[index].classList.add("modal_opened");
}

function closeModal(index) {
  modals[index].classList.remove("modal_opened");
}

function openLocationModal(e) {
  modals[locationModalIndex].classList.add("modal_opened");
  const image = e.target;

  modalImage.src = image.src;
  modalTitle.textContent = image.nextElementSibling.textContent;
}

function editProfile(e) {
  e.preventDefault();
  console.log("sub");

  let nameVal = document.querySelector("#form__name").value;
  let descriptionVal = document.querySelector("#form__description").value;

  profileName.textContent = nameVal;
  profileDescription.textContent = descriptionVal;
  closeModal(0);
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
  const cardElement = e.target.parentElement;

  cardElement.remove();
}

// renders card created by user
function renderNewCard(e) {
  e.preventDefault();

  const title = document.querySelector("#form__title").value;
  const imageUrl = document.querySelector("#form__image-link").value;
  const cardData = { name: title, link: imageUrl };
  const cardElement = createCard(cardData);

  locations.append(cardElement);

  closeModal(1);

  likeButtons = document.querySelectorAll(".card__like-icon");
  deleteButtons = document.querySelectorAll(".card__delete-icon");
  cardImages = document.querySelectorAll(".card__image");

  addImageEvent();
  addDeleteEvent();
  addLikeEvent();
}

// renders default cards
function renderCards(data) {
  data.forEach((item) => {
    let cardElement = createCard(item);
    locations.append(cardElement);

    likeButtons = document.querySelectorAll(".card__like-icon");
    deleteButtons = document.querySelectorAll(".card__delete-icon");
    cardImages = document.querySelectorAll(".card__image");

    addImageEvent();
    addDeleteEvent();
    addLikeEvent();
  });
}

function likeCard(e) {
  e.target.classList.toggle("card__like-icon_clicked");
}

renderCards(initialCards);

//event listeners for profile edit form
editButton.addEventListener("click", function () {
  openModal(editModalIndex);
});
formCloseButton[editModalIndex].addEventListener("click", function () {
  closeModal(editModalIndex);
});
modalForm[editModalIndex].addEventListener("submit", editProfile);

//event listeners for location add form
addButton.addEventListener("click", function () {
  openModal(addCardModalIndex);
});
formCloseButton[addCardModalIndex].addEventListener("click", function () {
  closeModal(addCardModalIndex);
});
modalForm[addCardModalIndex].addEventListener("submit", renderNewCard);

//event listener for card modals
imageCloseButton.addEventListener("click", function () {
  closeModal(locationModalIndex);
});

//event listeners for cards
function addImageEvent() {
  cardImages.forEach((image) => {
    image.addEventListener("click", openLocationModal);
  });
}

function addLikeEvent() {
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", likeCard);
  });
}

function addDeleteEvent() {
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", removeCard);
  });
}
