import React from "react";

import PortfolioProject from "../PortfolioProject/PortfolioProject";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="wrapper wrapper_indent_s">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__wrapper">
          <PortfolioProject
            url={"https://github.com/FreyrsKept/how-to-learn"}
            heading={"Статичный сайт"}
          />
          <PortfolioProject
            url={"https://github.com/FreyrsKept/russian-travel"}
            heading={"Адаптивный сайт"}
          />
          <PortfolioProject
            url={"https://github.com/FreyrsKept/react-mesto-api-full-gha"}
            heading={"Одностраничное приложение"}
          />
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
