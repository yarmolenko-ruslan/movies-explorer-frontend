import './Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({ loggedIn }) {

  return (
    <div className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
      <Footer />
    </div>
  )
};

export default Movies;