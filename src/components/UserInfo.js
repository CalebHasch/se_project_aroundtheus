export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }, profileImage) {
    this.name = document.querySelector(nameSelector);
    this.description = document.querySelector(descriptionSelector);
    this.image = profileImage;
  }

  getUserInfo() {
    const name = this.name.textContent;
    const description = this.description.textContent;
    return { name, description };
  }

  setUserInfo({ name, description }) {
    this.name.textContent = name;
    this.description.textContent = description;
  }

  setUserImage({ avatar }) {
    this.image.src = avatar;
  }
}
