import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn }) {

  return (
    <section className="saved-movies">
      <Header loggedIn={loggedIn} />
      <main className="saved-movies__main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </section>
  )
};

export default SavedMovies;