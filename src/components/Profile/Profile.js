import './Profile.css';
import Header from '../Header/Header';

function Profile({ loggedIn }) {

  return (
    <form className="profile" name="prof">
      <Header loggedIn={loggedIn} />
      <div className="profile__container">
        <h1 className="profile__title">
          Привет, Виталий!
        </h1>
        <div className="profile__item profile__item_position_first">
          <label className="profile__label" for="name">Имя</label>
          <input className="profile__input" id="name" type="text" placeholder="Виталий" maxLength={50} minLength={2} required />
        </div>
        <div className="profile__item profile__item_position_second">
          <label className="profile__label" for="email" >E-mail</label>
          <input className="profile__input" id="email" type="email" placeholder="pochta@yandex.ru" maxLength={50} required />
        </div>
        <button type="submit" className="profile__button">
          Редактировать
        </button>
        <button type="button" className="profile__button profile__button_red">
          Выйти из аккаунта
        </button>
      </div>
    </form>
  )
};

export default Profile;