class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _getHeaders() {
    let currentHeaders = this.headers;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      currentHeaders["Authorization"] = `Bearer ${jwt}`;
    }
    return currentHeaders;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _executeGetRequest(path) {
    return fetch(this.baseUrl + path, {
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return this._executeGetRequest("/users/me");
  }

  getInitialCards() {
    return this._executeGetRequest("/movies");
  }

  _executePatchRequest(path, data) {
    return fetch(this.baseUrl + path, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  patchUserInfo(data) {
    return this._executePatchRequest("/users/me", data);
  }

  postCard({ name, link }) {
    return fetch(this.baseUrl + "/movies", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }

  _executeDeleteRequest(path) {
    return fetch(this.baseUrl + path, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  deleteCard(moviesId) {
    return this._executeDeleteRequest("/movies/" + moviesId);
  }

  // deleteLikes(moviesId) {
  //   return this._executeDeleteRequest("/cards/" + moviesId + "/likes");
  // }

  // putLikes(moviesId) {
  //   return fetch(this.baseUrl + "/movies/" + moviesId + "/likes", {
  //     method: "PUT",
  //     headers: this.headers,
  //   }).then(this._checkResponse);
  // }

  signUp({ name, password, email }) {
    return fetch(this.baseUrl + "/signup", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  signIn({ password, email }) {
    return fetch(this.baseUrl + "/signin", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  getUserAuth(token) {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: "https://api.movies.explorer.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export const auth = new Api({
  baseUrl: "https://api.movies.explorer.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});