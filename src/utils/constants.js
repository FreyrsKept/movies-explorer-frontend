export const URL_BASE = "https://api.freyrskept.diploma.nomoredomainsmonster.ru";
export const URL_LOCAL = "http://localhost:3000";
export const URL_BEATFILM_MOVIES =
  "https://api.nomoreparties.co/beatfilm-movies";

export const ROUTE_MAIN = "/"
export const ROUTE_SIGNUP = "/signup"
export const ROUTE_SIGNIN = "/signin"
export const ROUTE_MOVIES = "/movies"
export const ROUTE_SAVEDMOVIES = "/saved-movies"
export const ROUTE_PROFILE = "/profile"
export const ROUTE_CURRENTUSER = "/users/me"
export const ROUTE_ROOT = "*"

export const emailRegex =
  "[A-z0-9!#$%&'*+-/=?^_`{|]{1,64}@[A-z0-9-.]{2,253}\\.[A-z]{2,63}";
export const passwordRegex =
  "(?=.*[A-z])(?=.*\\d)(?=.*[!@#$%^&*])(?=.{8,}).*";
export const usernameRegex =
  "[A-я-\\s]{2,30}";
export const shortFilmLenght = 40;
// Размеры экрана
export const LAPTOP_SCREEN_WIDTH = 1270;
export const TABLET_SCREEN_WIDTH = 768;
export const MOBILE_SCREEN_WIDTH = 480;

export const SHORT_FILM_DURATION = 40;

// Количество карточек
export const NUM_CARDS_DESKTOP_INIT = 12;
export const NUM_CARDS_TABLET_INIT = 8;
export const NUM_CARDS_MOBILE_INIT = 5;
// + Карточек
export const NUM_CARDS_DESKTOP_ADD = 3;
export const NUM_CARDS_TABLET_ADD = 2;
export const NUM_CARDS_MOBILE_ADD = 2;