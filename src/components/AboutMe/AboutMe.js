import React from "react";
import StudentAvatar from "../../images/StudentAvatar.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <div className="wrapper section-wrapper section-wrapper_indent_s">
        <h2 className="about-heading section-heading">Студент</h2>
        <div className="about-me__wrapper">
          <div className="about-me__biography">
            <h3 className="about-me__heading">Виталий</h3>
            <p className="about-me__subheading">Фронтенд-разработчик, 25 лет</p>
            <p className="about-me__paragraph">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              className="paragraph-s"
              href="https://github.com/freyrsKept"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
          <img
            className="avatar"
            src={StudentAvatar}
            alt="Игорь Казаков, Frontend разработчик"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
