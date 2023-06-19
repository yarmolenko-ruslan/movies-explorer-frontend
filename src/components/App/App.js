import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
// import { api, auth } from '../../utils/Api';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          {/* <Route path="/movies" element={<ProtectedRoute />}>
            <Route element={<Movies />} />
          </Route> */}
          <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
          <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />} />
          <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
          {/* <Route path="/saved-movies" element={<ProtectedRoute />}>
            <Route element={<SavedMovies />} />
          </Route> */}
          {/* <Route path="/profile" element={<ProtectedRoute />}>
            <Route element={<Profile />} />
          </Route> */}
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/404" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
