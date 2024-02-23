export const validation = {
  frontend: {
    email: "Требуется ввести электронную почту",
    password:
      "Пароль должен быть мин. из 8 симв., включать латиницу, цифру и спецсимвол",
    name: "Имя должно быть от 2 до 30 симв., содержать только буквы, дефис или пробел",
  },

  backend: {
    401: "Вы ввели неправильный логин или пароль",
    409: "Пользователь с таким email уже существует",
    500: "Что-то пошло не так...",
  },
};

export const showDefaultError = (process) => `При ${process} произошла ошибка`;
