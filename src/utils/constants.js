export const URL_BASE = "https://api.freyrskept.diploma.nomoredomainsmonster.ru";
export const URL_LOCAL = "http://localhost:3000";

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