import './NavBar.css';
import { React } from "react";
import { NavLink } from 'react-router-dom';

function NavBar({ burgerMenuOpened, handleBurgerMenuClose }) {

  return (
    <nav className={(burgerMenuOpened) ? ("navbar navbar_active") : ("navbar")}>
      <button className="navbar__close" onClick={handleBurgerMenuClose}></button>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link navbar__link_active' : 'navbar__link'}>Главная</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/movies" className={({ isActive }) => isActive ? 'navbar__link navbar__link_active' : 'navbar__link'}>Фильмы</NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/saved-movies" className={({ isActive }) => isActive ? 'navbar__link navbar__link_active' : 'navbar__link'}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <NavLink to="/profile" className="navbar__profile">Аккаунт</NavLink>
    </nav>
  )
}

export default NavBar;