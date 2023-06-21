import './SearchForm.css';

function SearchForm() {

  return (
    <section className="search-form">
      <div className="search-form__container container">
        <form className="search-form__form" name="search">
          <div className="search-form__search">
            <input type="search" className="search-form__input" placeholder="Фильм" maxLength={300} required />
            <button type="submit" className="search-form__submit">Найти</button>
          </div>
          <div className="search-form__short">
            <span className="search-form__signature">Короткометражки</span>
            <input className="search-form__checkbox" id="checkbox" type="checkbox" />
            <label className="search-form__checkbox-fake" for="checkbox"></label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
