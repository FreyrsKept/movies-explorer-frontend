import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTE_MOVIES, ROUTE_SAVEDMOVIES } from "../../utils/constants";


function FilterCheckbox({ onFilter, isFilterCheckboxChecked }) {
  const location = useLocation();
  const pathMovies = location.pathname === ROUTE_MOVIES;
  const pathSavedMovies = location.pathname === ROUTE_SAVEDMOVIES;

  function toggleFilterCheckbox({ type, target, key }) {
    let checked;

    if (type === "change") {
      checked = target.checked;
    }

    if (type === "keydown" && key === "Enter") {
      const checkbox = target.children[0];

      checked = target.children[0].checked
        ? (checkbox.checked = false)
        : (checkbox.checked = true);
    }

    if (pathMovies && checked !== undefined) onFilter(checked);

    if (pathSavedMovies && checked !== undefined) onFilter(checked);
  }

  return (
    <div className="filter-checkbox">
      <div className="filter-checkbox__wrapper"
        tabIndex="0"
        onChange={(evt) => toggleFilterCheckbox(evt)}
        onKeyDown={(evt) => toggleFilterCheckbox(evt)}>
        <input
          className="filter-checkbox__input"
          // placeholder="Фильтр короткомтражных фильмов"
          id="filter-films"
          type="checkbox"
          defaultChecked={isFilterCheckboxChecked}
        />
        <label
          className="filter-checkbox__label"
          htmlFor="filter-films"
        />
      </div>
      <span className="filter-checkbox__span">Короткометражки</span>
    </div>
  );
}

FilterCheckbox.propTypes = {
  isFilterCheckboxChecked: PropTypes.bool,
  onFilter: PropTypes.func,
};

export default FilterCheckbox;
