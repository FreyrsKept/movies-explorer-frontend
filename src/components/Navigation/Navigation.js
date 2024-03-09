import React from "react";
import { Link, NavLink } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions.js";

import {
  ROUTE_MAIN,
  ROUTE_MOVIES,
  ROUTE_SAVEDMOVIES,
  ROUTE_PROFILE,
} from "../../utils/constants.js";

function Navigation() {
  const isMobileWidth = useWindowDimensions() <= 768;

  const links = [
    {
      path: ROUTE_MOVIES,
      label: "Фильмы",
    },
    {
      path: ROUTE_SAVEDMOVIES,
      label: "Сохранённые фильмы",
    },
  ];

  function createNavLink(path, label) {
    return (
      <li key={label}>
        <NavLink
          className={({ isActive }) =>
            `link nav__link${(isActive && " nav__link-active") || ""}`
          }
          to={path}
        >
          {label}
        </NavLink>
      </li>
    );
  }

  return (
    <div className="layout-nav">
      <nav className="nav">
        <ul className="nav__list">
          {isMobileWidth && createNavLink(ROUTE_MAIN, "Главная")}
          {links.map(({ path, label }) => createNavLink(path, label))}
        </ul>
      </nav>
      <Link className="link link-profile" to={ROUTE_PROFILE}>
      </Link>
    </div>
  );
}

export default Navigation;
