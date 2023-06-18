import './NavBar.css';

function NavBar({ burgerMenuOpened, handleBurgerMenuClose }) {

  return (
    <nav className={(burgerMenuOpened) ? ("navbar navbar_active") : ("navbar")}>
      <button className="navbar__close" onClick={handleBurgerMenuClose}></button>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/" className="navbar__link">Главная</a>
        </li>
        <li className="navbar__item">
          <a href="/movies" className="navbar__link navbar__link_active">Фильмы</a>
        </li>
        <li className="navbar__item">
          <a href="/saved-movies" className="navbar__link ">Сохранённые фильмы</a>
        </li>
      </ul>
      <a href="/profile" className="navbar__profile">Аккаунт</a>
    </nav>
  )
}

export default NavBar;