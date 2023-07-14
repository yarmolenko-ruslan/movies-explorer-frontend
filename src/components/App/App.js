import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { mainApi } from '../../utils/MainApi';
import { authApi } from '../../utils/AuthApi';
import { moviesApi } from '../../utils/MoviesApi';

import './App.css';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RedirectRoute from '../RedirectRoute/RedirectRoute';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [shortDurations, setShortDurations] = useState(false);
  const [succesMessage, setSuccesMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleCards, setVisibleCards] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentUser, setCurrentUser] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
  const [likedCards, setLikedCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changed, setChanged] = useState(false);
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch(console.error);

      fetchLikedCards()
        .then((data) => {
          setLikedCards(data);
        })
        .catch(console.error);

      const cachedCards = localStorage.getItem('all-movies-cards');
      if (cachedCards) {
        setCards(JSON.parse(cachedCards));
      }
    }
  }, [loggedIn]);

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      authApi.getUserAuth(jwt)
        .then((data) => {
          setLoggedIn(true);
          navigate();
        })
        .catch((err) => {
          setLoggedIn(false);
          onLogout();
        });
    } else {
      setLoggedIn(false);
      onLogout();
    }
  }

  function onRegister(name, email, password) {
    authApi.signUp({ name: name, password: password, email: email })
      .then(() => {
        onLogin(password, email);
        navigate('/movies');
      })
      .catch((err) => {
        if (409) {
          setErrorMessage('Пользователь с таким email уже зарегистрирован');
        } else {
          setErrorMessage('При регистрации произошла ошибка')
        }
      })
  }

  function onLogin(password, email) {
    authApi.signIn({ password: password, email: email })
      .then((data) => {
        localStorage.setItem('jwt', data.jwt);
        setLoggedIn(true);
        setErrorMessage('');
        navigate('/movies');
      })
      .catch((err) => {
        if (401) {
          setErrorMessage('Неверная почта или пароль');
        } else {
          setErrorMessage('При авторизации произошла ошибка')
        }
      })
  }

  function onLogout() {
    setLoggedIn(false);
    setShortDurations(false);
    setCurrentUser([]);
    setCards([]);
    setLikedCards([]);
    setSearchValue('');
    setVisibleCards([])
    setSearchCount(0);
    setChanged(false);
    setEditMode(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('all-movies-cards');
    localStorage.removeItem('saved-movies-cards');
    localStorage.removeItem('all-movies-search-form-searchValue');
    localStorage.removeItem('saved-movies-search-form-searchValue');
    localStorage.removeItem('all-movies-search-form-shortDurations');
    localStorage.removeItem('saved-movies-search-form-shortDurations');
  }

  function handleUpdateUser(name, email) {
    mainApi.patchUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setSuccesMessage('Успешно!')
      })
      .catch((err) => {
        if (400) {
          setErrorMessage('Используемый вами email уже занят, введите другой');
        } else {
          setErrorMessage('При обновлении профиля произошла ошибка')
        }
      })
  };

  function refreshCards() {
    if (loggedIn && cards.length === 0) {
      setLoading(true);
      const fetchingLikedCard = fetchLikedCards();
      const cardsFetching = moviesApi.getMovies();
      Promise.all([fetchingLikedCard, cardsFetching])
        .then(function ([currentLikedCards, currentCards]) {
          setLikedCards(currentLikedCards);
          const loadedCards = currentCards.map((card) => {
            const likedCard = currentLikedCards.find((likedCard) => likedCard.movieId === card.id);
            const likedCardId = likedCard ? likedCard._id : undefined;
            return {
              country: card.country,
              director: card.director,
              duration: card.duration,
              year: card.year,
              description: card.description,
              image: `https://api.nomoreparties.co${card.image.url}`,
              trailerLink: card.trailerLink,
              nameRU: card.nameRU,
              nameEN: card.nameEN,
              thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
              movieId: card.id,
              owner: card.owner,
              isSaved: likedCard ? true : false,
              _id: likedCardId
            };
          });
          setCards(loadedCards);
          localStorage.setItem('all-movies-cards', JSON.stringify(loadedCards));
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  };

  function refreshLikedCards() {
    // заглушка для роута '/saved-movies'
  }

  function handleCardSave(card) {
    mainApi.postMovie(card)
      .then((data) => {
        const newCard = { ...data.data, isSaved: true }
        setCards((state) => {
          const newState = state.map((crd) => (crd.movieId === card.movieId ? newCard : crd));
          localStorage.setItem('all-movies-cards', JSON.stringify(newState));
          return newState;
        });
        setLikedCards((state) => {
          const currentLikedCards = state.filter((c) => (c._id !== card._id));
          currentLikedCards.push(newCard);
          return currentLikedCards;
        });
      })
      .catch(console.error)
  }

  function fetchLikedCards() {
    if (likedCards.length === 0) {
      return mainApi.getSavedMovies().then((data) => data.data);
    } else {
      return Promise.resolve(likedCards);
    }
  }

  function handleCardRemove(card) {
    mainApi.deleteMovie(card._id)
      .then(() => {
        const newCard = { ...card, isSaved: false }
        setCards((state) => {
          const newState = state.map((crd) => (crd.movieId === card.movieId ? newCard : crd));
          localStorage.setItem('all-movies-cards', JSON.stringify(newState));
          return newState;
        });
        setLikedCards((state) => state.filter((crd) => (crd._id !== card._id)));
      })
      .catch(console.error)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route index path="/" element={
            <Main loggedIn={loggedIn} />
          } />

          <Route exact path="/signup" element={
            <RedirectRoute loggedIn={loggedIn}>
              <Register onRegister={onRegister} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
            </RedirectRoute>}
          />

          <Route exact path="/signin" element={
            <RedirectRoute loggedIn={loggedIn}>
              <Login onLogin={onLogin} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
            </RedirectRoute>}
          />

          <Route exact path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                key="saved-movies"
                type="saved-movies"
                loggedIn={true}
                shortDurations={shortDurations}
                setShortDurations={setShortDurations}
                cards={likedCards}
                refreshCards={refreshLikedCards}
                handleCardSave={handleCardSave}
                handleCardRemove={handleCardRemove}
                isInFavourites={true}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                visibleCards={visibleCards}
                setVisibleCards={setVisibleCards}
                searchCount={searchCount}
                setSearchCount={setSearchCount}
              />
            </ProtectedRoute>
          }
          />

          <Route exact path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                handleUpdateUser={handleUpdateUser}
                onLogout={onLogout}
                loggedIn={true}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                succesMessage={succesMessage}
                changed={changed}
                setChanged={setChanged}
                editMode={editMode}
                setEditMode={setEditMode}
              />
            </ProtectedRoute>
          }
          />

          <Route exact path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies key="all-movies"
                type="all-movies"
                loading={loading}
                shortDurations={shortDurations}
                setShortDurations={setShortDurations}
                loggedIn={true}
                cards={cards}
                refreshCards={refreshCards}
                handleCardSave={handleCardSave}
                handleCardRemove={handleCardRemove}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                isInFavourites={false}
                visibleCards={visibleCards}
                setVisibleCards={setVisibleCards}
                searchCount={searchCount}
                setSearchCount={setSearchCount}
              />
            </ProtectedRoute>
          }
          />

          <Route path="*" element={<PageNotFound loggedIn={loggedIn} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider >
  );

}

export default App;