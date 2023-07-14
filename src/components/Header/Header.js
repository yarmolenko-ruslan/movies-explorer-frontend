import './Header.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Header({ loggedIn }) {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

  function handleBurgerMenuOpen() {
    setBurgerMenuOpened(true);
  }

  function handleBurgerMenuClose() {
    setBurgerMenuOpened(false);
  }

  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo" to="/" alt="Логотип"></Link>
        {(!loggedIn) ? (
          <div className="header__info">
            <Link to="/signup" className="header__registr">
              Регистрация
            </Link>
            <Link to="/signin" className="header__login">
              Войти
            </Link>
          </div>
        ) :
          (
            <div className="header__menu">
              <div className="header__menu-container">
                <div className="header__films">
                  <NavLink to="/movies" className={({ isActive }) => isActive ? "header__link header__link_active" : "header__link"}>
                    Фильмы
                  </NavLink>
                  <NavLink to="/saved-movies"
                    className={({ isActive }) => isActive ? "header__link header__link_active" : "header__link"}>
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <div className="header__account">
                  <Link to="/profile" className="header__link header__account-link">
                    Аккаунт
                  </Link>
                  <Link to="/profile" className="header__icon"></Link>
                </div>
              </div>
              <button className="header__burger-menu" onClick={handleBurgerMenuOpen}></button>
            </div>
          )
        }
      </div>
      <NavBar burgerMenuOpened={burgerMenuOpened} handleBurgerMenuClose={handleBurgerMenuClose} />
    </header>
  );
}

export default Header;
