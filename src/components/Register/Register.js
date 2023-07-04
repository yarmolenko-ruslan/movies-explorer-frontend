import './Register.css';
import { Link, NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';

function Register({ onRegister, errorMessage, setErrorMessage }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleRegister(event) {
    event.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  function handleInputsChange(event) {
    handleChange(event);
    cleanErrorMessage();
  }

  function cleanErrorMessage() {
    setErrorMessage('');
  }

  return (
    <form className="register" name="reg" noValidate onSubmit={handleRegister}>
      <div className="register__container">
        <NavLink to="/" className="register__logo"></NavLink>
        <h1 className="register__title">
          Добро пожаловать!
        </h1>

        <label className="input__label" htmlFor="name">Имя</label>
        <input className="register__input input" id="name" name="name" type="text" value={values.name || ""} onChange={handleInputsChange} placeholder="Имя" minLength={2} maxLength={30} required />
        <span className="input__error">{errors.name}</span>

        <label className="input__label" htmlFor="email" >E-mail</label>
        <input className="register__input input" id="email" type="email" placeholder="Почта" value={values.email || ""} name='email' onChange={handleInputsChange} minLength={3} maxLength={50} required />
        <span className="input__error">{errors.email}</span>

        <label className="input__label" htmlFor="password">Пароль</label>
        <input className="register__input input" id="password" type="password" placeholder="Пароль" value={values.password || ""} name='password' onChange={handleInputsChange} maxLength={50} minLength={6} required />
        <span className="input__error">{errors.password}</span>
        <p className={`input__error-message ${errorMessage && 'input__error-message_visible'}`}>{errorMessage}</p>

        <button className={`button ${!isValid && 'button_disabled'}`} disabled={!isValid} title="Зарегистрироваться" type="submit">Зарегистрироваться</button>

        <div className="message">
          <p className="message__text">Уже зарегистрированы?</p>
          <Link to="/signin" className="message__link" onClick={cleanErrorMessage}>Войти</Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
