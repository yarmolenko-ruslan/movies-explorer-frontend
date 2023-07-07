import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound({ loggedIn }) {

  return (
    <section className="not-found">
      <h2 className="not-found__title">
        404
      </h2>
      <p className="not-found__subtitle">
        Страница не найдена
      </p>
      <Link className="not-found__link" to={loggedIn ? "/movies" : "/"}>Назад</Link>
    </section >
  )
}

export default PageNotFound;