import './MoviesCard.css';
import Plug from '../../images/plug.jpg';

function MoviesCard() {
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h3 className="movies-card__title">
            33 слова о дизайне
          </h3>
          <h4 className="movies-card__subtitle">
            1ч 47м
          </h4>
        </div>
        <button
          className="movies-card__favourites movies-card__favourites_active"
          type="button"
          aria-label="Избранное"
        />
      </div>
      <img src={Plug} alt="Картинка" className="movies-card__image" />
    </li>
  );
}

export default MoviesCard;
