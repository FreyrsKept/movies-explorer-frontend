import React, { useState } from "react";
import PropTypes from "prop-types";

function MoviesCard({ card: { nameRU, duration, image }, icon }) {
  function countTime(duration) {
    const time = duration / 60;
    const hours = Math.floor(time);
    const minutes = duration - hours * 60;

    if (hours && minutes) return `${hours}ч ${minutes}м`;

    return hours ? `${hours}ч` : `${minutes}м`;
  }

  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive);
  };


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
        onClick={handleToggle}
        id="movieSave"
        className={`btn ${isActive ? "movies-card__btn-favourite" : "movies-card__btn-favourite_active"}`}
        type="button"
        aria-label="Добавление карточки с фильмом в избранные"
      >
        {icon}
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
