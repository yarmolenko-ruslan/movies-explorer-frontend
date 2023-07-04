import './MoviesCardList.css';
import { React, useState, useEffect } from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  WIDTH_1200, WIDTH_480, VISIBLE_MOVIES_5, VISIBLE_MOVIES_8, VISIBLE_MOVIES_12, UPLOAD_MOVIES_2, UPLOAD_MOVIES_3
} from '../../utils/Settings';

function MoviesCardList({ isInFavourites, cards, handleCardSave, handleCardRemove }) {
  const [showedCards, setShowedCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedMovies, setDisplayedMovies] = useState(0);
  const [moviesToLoad, setMoviesToLoad] = useState(0);

  const moreButtonClassHidden = "movies-list__button_hidden";
  const moreButtonClassVisible = "movies-list__button";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    let showedCardsCountAtOnce = displayedMovies;

    if (windowWidth <= WIDTH_480) {
      showedCardsCountAtOnce = VISIBLE_MOVIES_5;
      setMoviesToLoad(UPLOAD_MOVIES_2);
    } else if (windowWidth <= WIDTH_1200) {
      showedCardsCountAtOnce = VISIBLE_MOVIES_8;
      setMoviesToLoad(UPLOAD_MOVIES_2);
    } else {
      showedCardsCountAtOnce = VISIBLE_MOVIES_12;
      setMoviesToLoad(UPLOAD_MOVIES_3);
    }

    setDisplayedMovies(showedCardsCountAtOnce);
    setShowedCards(cards.slice(0, showedCardsCountAtOnce));

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [cards, isInFavourites, windowWidth, displayedMovies])

  function addShowedCards() {
    const leftBound = showedCards.length;
    const rightBound = showedCards.length + moviesToLoad;
    const addedCards = cards.slice(leftBound, rightBound);
    setShowedCards((state) => state.concat(addedCards));
  }

  const renderCard = (card) => {
    return <MoviesCard card={card} key={card.movieId} isInFavourites={isInFavourites} isSaved={card.isSaved} onCardSave={handleCardSave} onCardRemove={handleCardRemove}></MoviesCard>
  }

  return (
    <section className="movies-list">
      <div className="movies-list__container container">
        <ul className="movies-list__list">
          {showedCards.map(renderCard)}
        </ul>
        <button className={(showedCards.length < cards.length ? moreButtonClassVisible : moreButtonClassHidden)} onClick={addShowedCards} title="Ещё">
          Ещё
        </button>

      </div>
    </section>
  );
}

export default MoviesCardList;
