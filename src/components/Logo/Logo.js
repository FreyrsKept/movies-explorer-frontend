import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_MAIN } from "../../utils/constants";
import logo from "../../images/logo.png";
// TODO: ОТКЛЮЧИТЬ LINK ДЛЯ ГЛАВНОЙ СТРАНИЦЫ

export default function Logo() {
  return (
    <Link to={ROUTE_MAIN}>
      <img
        className="logo"
        src={logo}
        alt="Логотип сайта"
      />
    </Link>
  );
}
