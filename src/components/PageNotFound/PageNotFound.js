import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { ROUTE_MAIN, ROUTE_MOVIES } from "../../utils/constants";

function PageNotFound({ isCurrentUserLoggedIn }) {
  const navigate = useNavigate();

  return (
    <main>
      <section>
        <div className="not-found">
          <div className="not-found__wrapper">
            <div className="not-found__description">
              <h1 className="not-found__heading">404</h1>
              <p className="not-found__paragraph">Страница не найдена</p>
            </div>
            {/* <Link
              to={isCurrentUserLoggedIn ? ROUTE_MAIN : ROUTE_MOVIES}
              className="link not-found__link"
              onClick={handleClick}>
              Назад
            </Link> */}
            <Link
              className="link not-found__link"
              to={isCurrentUserLoggedIn ? ROUTE_MOVIES : ROUTE_MAIN}
            >
              Назад
            </Link>
          </div>
        </div>
      </section >
    </main >
  );
}

PageNotFound.propTypes = {
  isCurrentUserLoggedIn: PropTypes.bool,
};


export default PageNotFound;
