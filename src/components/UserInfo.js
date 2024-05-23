export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this.name = document.querySelector(nameSelector);
    this.description = document.querySelector(descriptionSelector);
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
}
