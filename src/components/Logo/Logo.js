import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
// TODO: ОТКЛЮЧИТЬ LINK ДЛЯ ГЛАВНОЙ СТРАНИЦЫ

export default function Logo() {
  return (
    <Link to={"/"}>
      <img
        className="logo"
        src={logo}
        alt="Логотип сайта"
      />
    </Link>
  );
}
