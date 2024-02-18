import React from "react";

import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function SavedMovies() {
  const icon = (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="21" rx="10.5" fill="#313131" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.5 11.4429L12.857 13.7999L13.9177 12.7393L11.5607 10.3822L13.7999 8.14295L12.7393 7.08229L10.5 9.32155L8.26086 7.08241L7.2002 8.14307L9.43934 10.3822L7.08241 12.7391L8.14307 13.7998L10.5 11.4429Z" fill="white" />
    </svg>
  );

  return (
    <>
      <main>
        <SearchForm />
        <MoviesCardList icon={icon} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
