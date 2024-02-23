import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <main>
      <section>
        <div className="not-found">
          <div className="not-found__wrapper">
            <div className="not-found__description">
              <h1 className="not-found__heading">404</h1>
              <p className="not-found__paragraph">Страница не найдена</p>
            </div>
            <Link className="link not-found__link" to={"/"}
              onClick={handleClick}>
              Назад
            </Link>
          </div>
        </div>
      </section >
    </main >
  );
}

export default PageNotFound;
