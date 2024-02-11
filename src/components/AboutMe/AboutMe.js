import React from "react";
import StudentAvatar from "../../images/StudentAvatar.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <div className="wrapper section-wrapper section-wrapper_">
        <h2 className="section-heading">Студент</h2>
        <div className="about-me__wrapper">
          <div className="about-me__biography">
            <h3 className="section-heading-main about-me__heading">Игорь</h3>
            <p className="about-me__subheading">Фронтенд-разработчик, 25 лет</p>
            <p className="paragraph about-me__paragraph">
              Переехал на ПМЖ в город Красноярск, где учился в СФУ ИКИТ по специализации Информационные системы и Технологии.
              Еще со школьных лет увлекался программированием на разных языках.
              Поступил на курс по веб-разработке от Яндекс Практикума.
              Люблю слушать музыку и увлекаюсь японскими автомобилями. На текущий момент работаю заместителем директора магазина.
              Надеюсь в скором времени найти работу Frontend разработчиком.
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
