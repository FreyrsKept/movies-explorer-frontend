import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  // const icon = (
  //   <svg
  //     width="72"
  //     height="21"
  //     viewBox="0 0 10 14"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M190 100 c0 -19 11 -26 23 -14 8 8 -3 34 -14 34 -5 0 -9 -9 -9 -20z"
  //     />
  //   </svg>
  // );

  return (
    <>
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
