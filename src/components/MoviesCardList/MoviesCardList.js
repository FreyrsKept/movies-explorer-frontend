import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

// ДЛЯ СТАТИЧНОЙ ОТРИСОВКИ
// import { cards } from "./cardsDataTemporary";
import {
  ROUTE_MOVIES,
  LAPTOP_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
  NUM_CARDS_DESKTOP_INIT,
  NUM_CARDS_TABLET_INIT,
  NUM_CARDS_MOBILE_INIT,
  NUM_CARDS_DESKTOP_ADD,
  NUM_CARDS_TABLET_ADD,
  NUM_CARDS_MOBILE_ADD,
} from "../../utils/constants";

function MoviesCardList({
  movies,
  icon,
  onMovieSelect,
  onLoad,
  hasUserSearched,
  error,
}) {
  const location = useLocation();
  const pathMovies = location.pathname === ROUTE_MOVIES;

  const windowWidth = useWindowDimensions();
  const isDesktop = windowWidth > LAPTOP_SCREEN_WIDTH;
  const isTablet =
    windowWidth > MOBILE_SCREEN_WIDTH && windowWidth <= LAPTOP_SCREEN_WIDTH;

  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    // Initial rendering cards number
    if (
      [
        NUM_CARDS_DESKTOP_INIT,
        NUM_CARDS_TABLET_INIT,
        NUM_CARDS_MOBILE_INIT,
        0,
      ].includes(visibleCards)
    ) {
      setVisibleCards(
        isDesktop
          ? NUM_CARDS_DESKTOP_INIT
          : isTablet
            ? NUM_CARDS_TABLET_INIT
            : NUM_CARDS_MOBILE_INIT
      );
    }
    if (
      isDesktop &&
      visibleCards % 3 !== 0 &&
      ![
        NUM_CARDS_DESKTOP_INIT,
        NUM_CARDS_TABLET_INIT,
        NUM_CARDS_MOBILE_INIT,
        0,
      ].includes(visibleCards)
    ) {
      setVisibleCards((prevVal) =>
        prevVal % 3 === 1 ? prevVal + 2 : prevVal + 1
      );
    }
    if (isTablet && visibleCards % 2 !== 0) {
      setVisibleCards((prevVal) => prevVal + 1);
    }
  }, [windowWidth]);

  function renderCards() {
    // If it /saved-movies, there will be last saved movies on the top of the gallery
    return (
      <div className="movies-gallery__movies">
        {(movies?.length &&
          (pathMovies
            ? movies.slice(0, visibleCards)
            : movies.slice().reverse()
          ).map((movie) => (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              icon={icon}
              onMovieSelect={onMovieSelect}
            />
          ))) ||
          ""}
      </div>
    );
  }

  function setMoreCards() {
    setVisibleCards(
      (prevVal) =>
        prevVal +
        (isDesktop
          ? NUM_CARDS_DESKTOP_ADD
          : isTablet
            ? NUM_CARDS_TABLET_ADD
            : NUM_CARDS_MOBILE_ADD)
    );
  }
  function renderResults() {
    if (onLoad) return <Preloader />;
    if (hasUserSearched && !movies?.length && !error?.moviesResponse) {
      return <p className="paragraph">Ничего не найдено</p>;
    }
    if (hasUserSearched && !movies?.length && error?.moviesResponse) {
      return (
        <p className="paragraph paragraph_type_error">
          {error?.moviesResponse}
        </p>
      );
    }
    return renderCards();
  }

  function renderCards() {
    return (
      <section
        className="movies-gallery"
        aria-label="Галерея с карточками фильмов"
      >
        <div className="wrapper movies-gallery__wrapper">
          {renderResults()}
          {visibleCards < movies?.length && pathMovies && (
            <button
              className="movies-gallery__btn-more"
              type="button"
              aria-label="Отображение новых карточек с фильмами в галерее"
              onClick={() => setMoreCards()}
            >
              Ещё
            </button>
          )}
        </div>
      </section>
    );
  }
}

MoviesCardList.propTypes = {
  icon: PropTypes.element,
  onMovieSelect: PropTypes.func,
  movies: PropTypes.array,
  onLoad: PropTypes.bool,
  hasUserSearched: PropTypes.bool,
  error: PropTypes.object,
};

export default MoviesCardList;
