import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-list">
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
    </section>
  );
}

export default MoviesCardList;
