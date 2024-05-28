class Api {
  constructor(options) {
    this._authorization = "fd5203a5-1f57-4428-b210-42e565daa250";
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "fd5203a5-1f57-4428-b210-42e565daa250",
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

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "fd5203a5-1f57-4428-b210-42e565daa250",
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
}

export const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "fd5203a5-1f57-4428-b210-42e565daa250",
    "Content-Type": "application/json",
  },
});
