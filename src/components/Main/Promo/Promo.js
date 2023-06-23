import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className="promo__container container">
        <h1 className="promo__title title">
        Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav className="promo__nav">
          <a href="#about-project" className="promo__link">О проекте</a>
          <a href="#techs" className="promo__link">Технологии</a>
          <a href="#about-me" className="promo__link">Студент</a>
        </nav>
      </div>
    </section>
  );
}

export default Promo;
