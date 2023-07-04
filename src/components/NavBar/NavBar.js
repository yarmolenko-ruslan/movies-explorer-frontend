import './NavBar.css';
import { React } from "react";
import { Link, NavLink } from 'react-router-dom';

function NavBar({ burgerMenuOpened, handleBurgerMenuClose }) {

  return (
    <nav className={(burgerMenuOpened) ? ("navbar navbar_active") : ("navbar")}>
      <button className="navbar__close" onClick={handleBurgerMenuClose}></button>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink to="/" className="navbar__link">Главная</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/movies" className="navbar__link navbar__link_active">Фильмы</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/saved-movies" className="navbar__link ">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <NavLink to="/profile" className="navbar__profile">Аккаунт</NavLink>
    </nav>
  )
}

export default NavBar;