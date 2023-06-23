import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id="about-project">
      <div className="container">
        <h2 className="subtitle">
          О проекте
        </h2>
        <div className="about-project__info">
          <div className="about-project__duration">
            <h3 className="about-project__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__time">
            <h3 className="about-project__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className="about-project__scale-container">
          <div className="about-project__back">
            <figure className="about-project__scale about-project__scale_color_green">
              1 неделя
            </figure>
            <p className="about-project__scale-text">
              Back-end
            </p>
          </div>
          <div className="about-project__front">
            <figure className="about-project__scale about-project__scale_color_gray">
              4 недели
            </figure>
            <p className="about-project__scale-text">
              Front-end
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
