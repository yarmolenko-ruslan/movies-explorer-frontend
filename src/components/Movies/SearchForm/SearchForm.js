import { React, useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ type, searchValue, setSearchValue, shortDurations, setShortDurations, handleSearchCards, isInFavourites }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let needSearchExecution = false;
    if (!isInFavourites) {
      const storageSearchValue = localStorage.getItem(`${type}-searchValue`);
      if (storageSearchValue) {
        setSearchValue(storageSearchValue);
        needSearchExecution = true;
      }

      const storageShortDurations = localStorage.getItem(`${type}-shortDurations`) === "true";
      if (storageShortDurations) {
        setShortDurations(storageShortDurations);
      }
    } else {
      setSearchValue('');
      setShortDurations(false);
    }
    if (needSearchExecution) {
      handleSearchCards();
    }
  }, []);

  const handleSearch = (evt) => {
    const currentSearchValue = evt.target.value
    setSearchValue(currentSearchValue);
    setErrorMessage('');
  };

  function handleSearchClick(evt) {
    if (searchValue) {
      localStorage.setItem(`${type}-searchValue`, searchValue);
      setErrorMessage('');
      handleSearchCards();
    } else {
      setErrorMessage('Введите ключевые слова для поиска');
    }
    evt.preventDefault();
  }

  const handleSwitchShortMovies = (evt) => {
    const checked = evt.target.checked;
    setShortDurations(checked);
    localStorage.setItem(`${type}-shortDurations`, checked);
    handleSearchCards();
  };

  return (
    <section className="search-form">
      <div className="search-form__container container">
        <form className="search-form__form" name="search" noValidate onSubmit={handleSearchClick}>
          <div className="search-form__search">
            <input type="text" className="search-form__input" placeholder="Фильм" value={searchValue || ""} onChange={handleSearch} required />
            <button type="submit" className="search-form__submit" title="Найти">Найти</button>
            <p className={`seach-form__error ${errorMessage && 'seach-form__error_visible'}`}>{errorMessage}</p>
          </div>
          <div className="search-form__short">
            <span className="search-form__signature">Короткометражки</span>
            <input className="search-form__checkbox" id="checkbox" checked={shortDurations} onChange={handleSwitchShortMovies} type="checkbox" />
            <label className="search-form__checkbox-fake" htmlFor="checkbox"></label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
