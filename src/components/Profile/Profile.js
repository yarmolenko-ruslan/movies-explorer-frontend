import { React } from 'react';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ loggedIn, handleUpdateUser, onLogout, errorMessage, setErrorMessage, succesMessage, changed, setChanged, setEditMode, editMode }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, errors, isValid, handleChange } = useFormWithValidation();
  const navigate = useNavigate();

  useEffect(() => {
    setChanged(values.personName !== currentUser.name || values.personEmail !== currentUser.email);
  }, [values, currentUser]);

  function handleUpdateUserInfo(evt) {
    evt.preventDefault();
    handleUpdateUser(values.personName, values.personEmail);
    setEditMode(false);
  }

  function handleChangeName(evt) {
    handleChange(evt);
    cleanErrorMessage();
  };

  function handleChangeEmail(evt) {
    handleChange(evt);
    cleanErrorMessage();
  };

  function cleanErrorMessage() {
    setErrorMessage('');
  }

  function clickEditButton() {
    setEditMode(true);
  }

  function signOut() {
    onLogout();
    navigate('/');
  }

  useEffect(() => {
    setValues({ personName: currentUser.name, personEmail: currentUser.email });
  }, [setValues, currentUser]);

  return (
    <form className="profile" name="prof" noValidate onSubmit={handleUpdateUserInfo}>
      <Header loggedIn={loggedIn} />
      <main className="profile__container">
        <h1 className="profile__title">
          Привет, {currentUser.name}!
        </h1>
        <div className="profile__item profile__item_position_first">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input
            className="profile__input"
            name="personName"
            value={values.personName || ""}
            onChange={handleChangeName}
            id="name"
            type="text"
            placeholder="Имя"
            disabled={!editMode}
            maxLength={50}
            minLength={2}
            required
          />
        </div>
        <div className="profile__item profile__item_position_second">
          <label className="profile__label" htmlFor="email" >E-mail</label>
          <input
            className="profile__input"
            name="personEmail"
            id="email"
            type="email"
            placeholder="Почта"
            value={values.personEmail || ""}
            onChange={handleChangeEmail}
            minLength={4}
            maxLength={50}
            pattern="^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$"
            disabled={!editMode}
            required />
        </div>
        <div className="profile__error-container">
          <p className='profile__error'>{errors.personEmail}</p>
          <p className={"profile__error-message"}>{errorMessage}</p>
          <p className={"profile__succes-message"}>{succesMessage}</p>
        </div>
        <button type="button" className={`profile__button ${!editMode || 'profile__button_visible'}`} onClick={clickEditButton} >Редактировать</button>

        <button type="submit" className={`profile__button-save_disable ${isValid && changed && 'profile__button-save'} ${editMode || 'profile__button_visible'}`} disabled={!changed}>Сохранить</button>

        <button type="button" className={`profile__button profile__button_red ${!editMode || 'profile__button_visible'}`} onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </main>
    </form>
  )
};

export default Profile;