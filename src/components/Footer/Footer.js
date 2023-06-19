import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__info">
          <p className="footer__data">
            &copy; {new Date().getFullYear()}
          </p>
          <ul className="footer__list">
            <li>
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com/yarmolenko-ruslan" className="footer__link" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
