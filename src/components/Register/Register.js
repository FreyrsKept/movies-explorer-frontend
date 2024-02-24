import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Entry from "../Entry/Entry.js";
import Input from "../Input/Input.js";
import useFormWithValidation from "../../hooks/useFormWithValidation.js";
import {
  emailRegex,
  passwordRegex,
  usernameRegex,
} from "../../utils/constants.js";
import { validation } from "../../utils/validation.js";

function Register({ onRegistration, onLoad, error }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password, name } = values;

    onRegistration({
      email: email.trim().replace(/\s/g, ""),
      password,
      name: name.trim().replace(/\s+/g, " "),
    });
  }
  return (
    <Entry
      heading={"Добро пожаловать!"}
      name={"register"}
      btn={"Зарегистрироваться"}
      btnAriaLabel={"Регистрация на сайте"}
      onSubmit={handleSubmit}
      onLoad={onLoad}
      isValid={isValid}
      error={error}
    >
      <Input
        label={"Имя"}
        htmlFor={"name"}
        id={"name"}
        name={"name"}
        type={"text"}
        autoComplete={"on"}
        placeholder="Ваше имя"
        value={values?.name || ""}
        onChange={handleChange}
        pattern={usernameRegex}
        errorCondition={errors?.name}
        errorMessage={validation.frontend.name}
      />
      <Input
        label={"E-mail"}
        htmlFor={"email"}
        id={"email"}
        name={"email"}
        type={"text"}
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
        name={"password"}
        type={"password"}
        autoComplete={"current-password"}
        placeholder="Ваш пароль"
        value={values?.password || ""}
        onChange={handleChange}
        pattern={passwordRegex}
        errorCondition={errors?.password}
        errorMessage={validation.frontend.password}
      />
      <p className="entry__paragraph">
        Уже зарегистрированы?&nbsp;
        <Link className="link link_type_inner-nav" to="/signin">
          Войти
        </Link>
      </p>
    </Entry>
  );
}

Register.propTypes = {
  onRegistration: PropTypes.func,
  onLoad: PropTypes.bool,
  error: PropTypes.object,
};

export default Register;
