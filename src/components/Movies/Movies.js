import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  movies,
  onSearch,
  setIsSearchRequestInProgress,
  searchFormValue,
  hasUserSearched,
  onFilter,
  isFilterCheckboxChecked,
  onMovieSelect,
  onLoad,
  error,
}) {
  const [prevValueMovies, setPrevValueMovies] = useState("");


  return (
    <>
      <main>
        <SearchForm
          onSearch={onSearch}
          setIsSearchRequestInProgress={setIsSearchRequestInProgress}
          searchFormValue={searchFormValue}
          onFilter={onFilter}
          isFilterCheckboxChecked={isFilterCheckboxChecked}
          valueRequired={true}
          prevValue={prevValueMovies}
          setPrevValue={setPrevValueMovies} />
        <MoviesCardList
          //
          movies={movies}
          onMovieSelect={onMovieSelect}
          onLoad={onLoad}
          hasUserSearched={hasUserSearched}
          error={error} />
      </main>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  movies: PropTypes.array,
  onSearch: PropTypes.func,
  setIsSearchRequestInProgress: PropTypes.func,
  searchFormValue: PropTypes.string,
  hasUserSearched: PropTypes.bool,
  onFilter: PropTypes.func,
  isFilterCheckboxChecked: PropTypes.bool,
  onMovieSelect: PropTypes.func,
  onLoad: PropTypes.bool,
  error: PropTypes.object,
};

export default Movies;
