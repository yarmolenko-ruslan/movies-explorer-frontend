import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container portfolio__container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <ul className="portfolio__list">
          <li className="portfolio__point">
            <a href="https://github.com/yarmolenko-ruslan/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт</a>
          </li>
          <li className="portfolio__point">
            <a href="https://github.com/yarmolenko-ruslan/russian-travel" className="portfolio__link" target="_blank">Адаптивный сайт</a>
          </li>
          <li className="portfolio__point">
            <a href="https://github.com/yarmolenko-ruslan/mesto-react" className="portfolio__link" target="_blank">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
