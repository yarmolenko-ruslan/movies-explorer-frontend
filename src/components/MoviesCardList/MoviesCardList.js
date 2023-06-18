import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <header className="movies-list">
      <div className="movies-list__container container">
        <ul className="movies-list__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        </ul>        
        <button className="movies-list__button">
          Ещё
        </button>
      </div>
    </header>
  );
}

export default MoviesCardList;
