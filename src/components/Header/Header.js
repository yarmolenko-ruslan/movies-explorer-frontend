import './Header.css';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';

function Header({ loggedIn }) {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);

  function handleBurgerMenuClick() {
    setBurgerMenuOpened(true);
  }

  function handleBurgerMenuClose() {
    setBurgerMenuOpened(false);
  }

  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="header__logo" alt="Логотип"></a>
        {(!loggedIn) ? (
          <div className="header__info">
            <a href="/signup" className="header__registr">
              Регистрация
            </a>
            <a href="/signin" className="header__login">
              Войти
            </a>
          </div>
        ) :
          (
            <div className="header__menu">
              <div className="header__menu-container">
                <div className="header__films">
                  <a href="/movies" className="header__link">
                    Фильмы
                  </a>
                  <a href="/saved-movies" className="header__link header__link_weight_400">
                    Сохранённые фильмы
                  </a>
                </div>
                <div className="header__account">
                  <a href="/profile" className="header__link header__account-link">
                    Аккаунт
                  </a>
                  <a href="/profile" className="header__icon"></a>
                </div>
              </div>
              <button className="header__burger-menu" onClick={handleBurgerMenuClick}></button>
            </div>
          )
        }
      </div>
      <NavBar burgerMenuOpened={burgerMenuOpened} handleBurgerMenuClose={handleBurgerMenuClose} />
    </header>
  );
}

export default Header;
