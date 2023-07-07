import { moviesApiUrl } from './Constants';

class MoviesApi {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this.url}beatfilm-movies`, {
      headers: this.headers,
    })
      .then(this._checkResponse);
  };
}

export const moviesApi = new MoviesApi({
  baseUrl: moviesApiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});