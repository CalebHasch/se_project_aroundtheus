class Api {
  constructor(options) {
    this._authorization = "fd5203a5-1f57-4428-b210-42e565daa250";
  }

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        res.description = res.about;
        return res;
      })
      .catch((err) => console.error(err));
  }

  updateUserInfo({ name, description }) {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: description,
      }),
    });
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => console.error(err));
  }

  postCard({ name, link }) {
    fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  deleteCard(cardId) {
    fetch(`https://around-api.en.tripleten-services.com/v1/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    });
  }
}

export const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "fd5203a5-1f57-4428-b210-42e565daa250",
    "Content-Type": "application/json",
  },
});