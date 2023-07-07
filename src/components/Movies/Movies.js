import { useEffect, React } from 'react';
import { LENGTH_SHORT_MOVIES } from '../../utils/Constants';

import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

function Movies({ type, loggedIn, loading, cards, refreshCards, handleCardSave, handleCardRemove, isInFavourites, shortDurations, setShortDurations, searchValue, setSearchValue, visibleCards, setVisibleCards, searchCount, setSearchCount }) {

  useEffect(() => {
    setVisibleCards(filterCards(cards));
  }, [cards, searchCount]);

  function handleSearchCards() {
    refreshCards();
    setSearchCount((count) => count + 1);
  }

  function filterCards(card) {
    const filteredCard = card
      .filter((card) => {
        return (card.nameRU.toUpperCase().includes(searchValue.toUpperCase()) ||
          card.nameEN.toUpperCase().includes(searchValue.toUpperCase())) && ((shortDurations && card.duration <= LENGTH_SHORT_MOVIES) || !shortDurations);
      })
    return filteredCard;
  }

  return (
    <div className="movies">
      <Header loggedIn={loggedIn} />
      <main className="movies__main">
        <SearchForm key={`${type}-search-form`} type={`${type}-search-form`} searchValue={searchValue} setSearchValue={setSearchValue} shortDurations={shortDurations} setShortDurations={setShortDurations} handleSearchCards={handleSearchCards} isInFavourites={isInFavourites} />
        {(() => {
          if (loading) { return (<Preloader />) }
          else if (searchCount > 0 && visibleCards.length === 0) { return (<PageNotFound />) }
          else {
            return (<MoviesCardList key={`${type}-cards`} isInFavourites={isInFavourites} cards={visibleCards}
              handleCardSave={handleCardSave} handleCardRemove={handleCardRemove} />)
          }
        })()}
      </main>
      <Footer />
    </div>
  )
};

export default Movies;