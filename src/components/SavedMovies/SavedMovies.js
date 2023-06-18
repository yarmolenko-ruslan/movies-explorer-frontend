import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies() {

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
};

export default SavedMovies;