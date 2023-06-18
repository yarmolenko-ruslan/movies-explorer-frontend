import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {

  return (
    <div className="not-found">
        <h2 className="not-found__title">
          404
        </h2>
        <p className="not-found__subtitle">
          Страница не найдена
        </p>
        <Link className="not-found__link" to={-1}>Назад</Link>
    </div>
  )
}

export default PageNotFound;