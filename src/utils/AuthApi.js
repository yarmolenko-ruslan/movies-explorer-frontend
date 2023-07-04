const baseUrl = 'https://api.movies.explorer.nomoredomains.rocks';

class AuthApi {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  signUp = ({ name, email, password }) => {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(this._checkResponse);
  }

  signIn = ({ password, email }) => {
    return fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    })
      .then(this._checkResponse);
  }

  getUserAuth = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkResponse);
  }

}

export const authApi = new AuthApi({
  headers: {
    'Content-Type': 'application/json',
  }
});

export default authApi;