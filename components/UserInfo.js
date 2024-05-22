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

  setUserInfo({ nameVal, descriptionVal }) {
    this.name.textContent = nameVal;
    this.description.textContent = descriptionVal;
  }
}
