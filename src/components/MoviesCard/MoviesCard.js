import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconSave } from "../MoviesCard/IconSave"
import { IconCross } from "../MoviesCard/IconCross"
import { useLocation } from "react-router-dom";

function MoviesCard({ card: { nameRU, duration, image } }) {
  function countTime(duration) {
    const time = duration / 60;
    const hours = Math.floor(time);
    const minutes = duration - hours * 60;

    if (hours && minutes) return `${hours}ч ${minutes}м`;

    return hours ? `${hours}ч` : `${minutes}м`;
  }

  const { pathname } = useLocation();

  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive);
  };
  // let isFavouriteCard = false;

  return (
    <article className="movies-card">
      <img
        className="movies-card__photo"
        src={image}
        alt={`Карточка с фильмом, называющимся "${nameRU}"`}
      />
      <div className="movies-card__description">
        <h2 className="movies-card__heading">{nameRU}</h2>
        <span className="movies-card__duration">{countTime(duration)}</span>
      </div>
      <button
        // className={`btn movies-card__btn-favourite${(isFavouriteCard && " movies-card__btn-favourite_active") || ""
        //   }`}
        onClick={handleToggle}
        className={`btn ${isActive ? "movies-card__btn-favourite" :
          "movies-card__btn-favourite_active"}`}
        type="button"
        aria-label="Добавление карточки с фильмом в избранные"
      >
        {pathname === "/movies" && isActive && <IconSave />}
        {pathname === "/saved-movies" && <IconCross />}
      </button>
    </article>
  );
}

MoviesCard.propTypes = {
  card: PropTypes.object.isRequired,
  nameRU: PropTypes.string,
  duration: PropTypes.number,
  image: PropTypes.string,
  icon: PropTypes.element,
};

export default MoviesCard;
