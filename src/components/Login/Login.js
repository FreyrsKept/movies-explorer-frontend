import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useFormWithValidation from "../../hooks/useFormWithValidation.js";
import Entry from "../Entry/Entry.js";
import Input from "../Input/Input.js";
import { emailRegex, passwordRegex } from "../../utils/constants.js";
import { validation } from "../../utils/validation.js";

function Login({ onAuthorization, onLoad, error }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = values;

    onAuthorization({
      email: email.trim().replace(/\s/g, ""),
      password,
    });
  }
  return (
    <Entry
      heading={"Рады видеть!"}
      name={"login"}
      btn={"Войти"}
      btnAriaLabel={"Авторизация на сайте"}
      onSubmit={handleSubmit}
      onLoad={onLoad}
      isValid={isValid}
      error={error}
    >
      <Input
        label={"E-mail"}
        name={"email"}
        htmlFor={"email"}
        id={"email"}
        type={"email"}
        autoComplete={"on"}
        placeholder="Ваш email"
        value={values?.email || ""}
        onChange={handleChange}
        pattern={emailRegex}
        errorCondition={errors?.email}
        errorMessage={validation.frontend.email}
      />
      <Input
        htmlFor={"password"}
        id={"password"}
        label={"Пароль"}
        type={"password"}
        minLength={"10"}
        autoComplete={"current-password"}
        placeholder="Ваш пароль"
        value={values?.password || ""}
        onChange={handleChange}
        pattern={passwordRegex}
        errorCondition={errors?.password}
        errorMessage={validation.frontend.password}
      />
      <p className="entry__paragraph">
        Ещё не зарегистрированы?&nbsp;
        <Link className="link link_type_inner-nav" to="/signup">
          Регистрация
        </Link>
      </p>
    </Entry>
  );
}

Login.propTypes = {
  onAuthorization: PropTypes.func,
  onLoad: PropTypes.bool,
  error: PropTypes.object,
};

export default Login;
