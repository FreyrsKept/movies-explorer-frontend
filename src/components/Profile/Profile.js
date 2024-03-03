import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import {
  emailRegex,
  ROUTE_MAIN,
  usernameRegex,
} from "../../utils/constants";
import { validation } from "../../utils/validation";

function Profile({
  setIsCurrentUserLoggedIn,
  setSearchFormValueSavedMovies,
  setIsFilterCheckboxSavedMoviesChecked,
  setCurrentUser,
  onUpdate,
  onLoad,
  isBtnSaveVisible,
  setIsBtnSaveVisible,
  onSuccessMessages,
  setSuccessMessages,
  error,
  setErrorMessages,
}) {
  const [prevValues, setPrevValues] = useState({});
  const [isDisable, setIsNotDisable] = useState(false); // блокировка кнопки "Сохранить"
  const navigate = useNavigate();

  const currentUser = useContext(CurrentUserContext);
  const { email, name } = currentUser;

  const { values, setValues, errors, isValid, setIsValid, handleChange } =
    useFormWithValidation();

  useEffect(() => {
    setValues({ email, name });

    setIsBtnSaveVisible(false);
    setSuccessMessages("");
    setErrorMessages({ updatingUserInfoResponse: "" });
  }, [navigate]);

  useEffect(() => {
    if (currentUser.name !== values.name || currentUser.email !== values.email) {
      setIsNotDisable(true)
    } else {
      setIsNotDisable(false)
    }
  }, [currentUser.name, currentUser.email, values.name, values.email])

  function showSaveBtn({ target }) {
    setIsBtnSaveVisible(true);
    setSuccessMessages("");

    const data = {};
    Array.from(target.closest(".profile__form").children[0].children).forEach(
      (wrapper) => {
        const input = wrapper.children[1];

        data[input.name] = input.value;
      }
    );

    setPrevValues(data);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, name } = values;
    console.log(prevValues);

    onUpdate({
      email: email.trim().replace(/\s/g, ""),
      name: name.trim().replace(/\s+/g, " "),
    });

    setIsValid(false);
  }

  function loginOut() {
    localStorage.clear();
    setCurrentUser({
      _id: "",
      email: "",
      name: "",
    });
    setSearchFormValueSavedMovies("");
    setIsFilterCheckboxSavedMoviesChecked(false);
    navigate(ROUTE_MAIN, { replace: true });
    setIsCurrentUserLoggedIn(false);
  }

  return (
    <main>
      <section>
        <div className="profile">
          <div className="profile__wrapper">
            <h1 className="profile__heading">Привет, {name}!</h1>
            <form
              className="profile__form"
              name="profile"
              onSubmit={handleSubmit}
              noValidate
            >
              <fieldset className="profile__fieldset">
                <div className="profile__input-wrapper">
                  <label className="profile__label" htmlFor="name">
                    Имя
                  </label>
                  <input
                    className="profile__input"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="on"
                    value={values?.name || ""}
                    required
                    onChange={handleChange}
                    pattern={usernameRegex}
                    disabled={isBtnSaveVisible ? false : true}
                  />
                </div>

                <div className="profile__input-wrapper">
                  <label className="profile__label" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="profile__input"
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="on"
                    value={values?.email || ""}
                    required
                    onChange={handleChange}
                    pattern={emailRegex}
                    disabled={isBtnSaveVisible ? false : true}
                  />
                  <span
                    className={`error${((errors?.email || errors?.name) && " error_visible") || ""
                      } error_type_server-response`}
                  >
                    {errors?.name && validation.frontend.name + "\n"}
                    {errors?.email && validation.frontend.email}
                  </span>
                </div>
              </fieldset>
              <div className="profile__wrapper-btn">
                <span
                  className={`error${(error?.updatingUserInfoResponse && " error_visible") || ""
                    } error_type_server-response`}
                >
                  {error?.updatingUserInfoResponse}
                </span>
                <span
                  className={`success${(onSuccessMessages?.updatingUserInfoResponse &&
                    !error?.updatingUserInfoResponse &&
                    " success_visible") ||
                    ""
                    }`}
                >
                  {onSuccessMessages?.updatingUserInfoResponse}
                </span>

                {isBtnSaveVisible ? (
                  <button
                    key="save"
                    className={!isValid || !isDisable ? 'btn btn-entry_error' : 'btn btn-entry btn-save'}
                    type="submit"
                    disabled={isValid && isDisable ? false : true}
                    // className="btn btn-entry btn-save"
                    // type="submit"
                    aria-label="Сохранение данных профиля"
                  // disabled={
                  //   !isValid ||
                  //   onLoad ||
                  //   (prevValues.email === values.email &&
                  //     prevValues.name === values.name)
                  // }
                  >
                    {onLoad ? "Сохранение..." : "Сохранить"}
                  </button>
                ) : (
                  <button
                    className="btn btn-profile"
                    type="button"
                    aria-label="Редактирование данных профиля"
                    onClick={(evt) => showSaveBtn(evt)}
                  >
                    Редактировать
                  </button>
                )}
              </div>
            </form>

            {!isBtnSaveVisible && (
              <button
                className="btn btn-profile-exit"
                type="button"
                aria-label="Выход из личного кабинета пользователя"
                onClick={() => loginOut()}
              >
                Выйти из аккаунта
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

Profile.propTypes = {
  setIsCurrentUserLoggedIn: PropTypes.func,
  setSearchFormValueSavedMovies: PropTypes.func,
  setIsFilterCheckboxSavedMoviesChecked: PropTypes.func,
  setCurrentUser: PropTypes.func,
  onUpdate: PropTypes.func,
  onLoad: PropTypes.bool,
  isBtnSaveVisible: PropTypes.bool,
  setIsBtnSaveVisible: PropTypes.func,
  onSuccessMessages: PropTypes.any,
  setSuccessMessages: PropTypes.func,
  error: PropTypes.object,
  setErrorMessages: PropTypes.func,
};

export default Profile;
