import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_MAIN } from "../../utils/constants"

function Profile() {

  const navigate = useNavigate();

  function loginOut() {
    navigate(ROUTE_MAIN, { replace: true });
  }

  return (
    <main>
      <section>
        <div className="profile">
          <div className="profile__wrapper">
            <h1 className="profile__heading">Привет, Игорь!</h1>
            <form className="profile__form" name="profile">
              <fieldset className="profile__fieldset">
                <div className="profile__input-wrapper">
                  <label className="profile__label" htmlFor="name">
                    Имя
                  </label>
                  <input
                    className="profile__input"
                    id="name"
                    placeholder='Ваше имя'
                    type="text"
                    minLength="2"
                    maxLength="30"
                    autoComplete="on"
                    defaultValue="Игорь"
                    required
                  />
                </div>
                <div className="profile__input-wrapper">
                  <label className="profile__label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="profile__input"
                    id="email"
                    placeholder='Ваш email'
                    type="email"
                    autoComplete="on"
                    defaultValue="pochta@yandex.ru"
                    required
                  />
                </div>
              </fieldset>
              <button
                className="btn btn-profile"
                type="submit"
                aria-label="Редактирование данных профиля"
              >
                Редактировать
              </button>
            </form>
            <button
              className="btn btn-profile-exit"
              type="button"
              aria-label="Выход из личного кабинета пользователя"
              onClick={() => loginOut()}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
