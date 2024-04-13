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

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".form__close-button");
const submitButton = document.querySelector(".form__submit-button");
const modal = document.querySelector(".modal");
let cardTemplate = document.querySelector("#locations__card").content;
let locations = document.querySelector(".locations");

function openModal() {
  modal.classList.add("modal_opened");
}

function closeModal() {
  modal.classList.remove("modal_opened");
}

function editProfile(e) {
  e.preventDefault();
  const name = document.querySelector(".profile__name");
  const description = document.querySelector(".profile__subtitle");

  let nameVal = document.querySelector("#form__name").value;
  let descriptionVal = document.querySelector("#form__description").value;

  name.textContent = nameVal;
  description.textContent = descriptionVal;
  closeModal();
}

function getCardElement(data) {
  for (item of data) {
    let cardElement = cardTemplate
      .querySelector(".locations__card")
      .cloneNode(true);
    let cardImage = cardElement.querySelector(".card__image");
    let cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardTitle.textContent = item.name;

    locations.append(cardElement);
  }
}

getCardElement(initialCards);

editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", editProfile);
