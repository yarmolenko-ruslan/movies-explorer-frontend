import { React } from "react";
import './MoviesCard.css';

function MoviesCard({ card, isInFavourites, isSaved, onCardSave, onCardRemove }) {
  const useButtonClassName = (() => {
    if (isInFavourites) {
      return 'movies-card__favourites movies-card__favourites_active';
    } else if (isSaved) {
      return 'movies-card__favourites movies-card__favourites_active';
    } else {
      return 'movies-card__favourites';
    }
  })();

  const handleCardSaveRemove = () => {
    if (isInFavourites || card.isSaved) {
      onCardRemove(card);
    } else {
      onCardSave(card);
    }
  }

  function getTimeFromMins(duration) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h3 className="movies-card__title">
            {card.nameRU}
          </h3>
          <h4 className="movies-card__subtitle">
            {getTimeFromMins(card.duration)}
          </h4>
        </div>
        <button
          className={useButtonClassName}
          onClick={handleCardSaveRemove}
          type="button"
          title="Избранное"
        />
      </div>
      <a href={card.trailerLink} rel="noreferrer" target="_blank">
        <img src={`${card.image}`} alt={card.nameRU} className="movies-card__image" />
      </a>

    </li>
  );
}

export default MoviesCard;
