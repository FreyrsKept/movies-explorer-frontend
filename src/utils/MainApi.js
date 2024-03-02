import {
  URL_BASE,
  ROUTE_SIGNUP,
  ROUTE_SIGNIN,
  ROUTE_MOVIES,
  ROUTE_CURRENTUSER,
} from "./constants"

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

// Пользовательские запросы
// export async function registerUser(name, email, password) {
//   return fetch(`${URL_BASE}${ROUTE_SIGNUP}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, password }),
//   })
//     .then((res) => {
//       return res;
//     })
//     .then((res) => checkServerResponse(res));
// }
class MainApi {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }
  registerUser(name, email, password) {
    return fetch(`${URL_BASE}${ROUTE_SIGNUP}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => {
        return res;
      })
      .then((res) => checkServerResponse(res));
  }
}

export async function authorizeUser(email, password) {
  return fetch(`${URL_BASE}${ROUTE_SIGNIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export function getUserInfo(token) {
  return fetch(`${URL_BASE}${ROUTE_CURRENTUSER}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}

export function setUserInfo(email, name) {
  return fetch(`${URL_BASE}${ROUTE_CURRENTUSER}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ email, name }),
  });
}
// Запросы к фильмам
export function getSavedMovies() {
  return fetch(`${URL_BASE}${ROUTE_MOVIES}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}/${res.statusText}`);
    }
  });
}

export function handleMovieServer(movie) {
  const selected = movie?.selected;

  if (selected) {
    const {
      id: movieId,
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
    } = movie;

    let { image } = movie;
    let thumbnail = `https://api.nomoreparties.co${image.formats.thumbnail.url}`;
    image = `https://api.nomoreparties.co${image.url}`;

    return fetch(`${URL_BASE}${ROUTE_MOVIES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    });
  } else {
    return fetch(
      `${URL_BASE}${ROUTE_MOVIES}/${movie.dbId || movie._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {},
})