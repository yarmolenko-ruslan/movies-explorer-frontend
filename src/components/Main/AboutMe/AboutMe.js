import './AboutMe.css';
import photo from '../../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id="about-me">
      <div className="container about-me__container">
        <h2 className="subtitle">
          Студент
        </h2>
        <div className="about-me__info">
          <div className="about-me__text">
            <h3 className="about-me__name">
              Виталий
            </h3>
            <p className="about-me__job">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="https://github.com/yarmolenko-ruslan" target="_blank" className="about-me__link" rel="noreferrer">
              Github
            </a>
          </div>
          <img src={photo} alt="Фотография студента" className="about-me__photo" />
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
