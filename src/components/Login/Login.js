import './Login.css';
import { Link, NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';

function Login({ onLogin, errorMessage, setErrorMessage }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleLogin(evt) {
    evt.preventDefault();
    onLogin(values.password, values.email);
  }

  function handleInputsChange(evt) {
    handleChange(evt);
    cleanErrorMessage();
  }

  function cleanErrorMessage() {
    setErrorMessage('');
  }

  return (

    <form className="login" name="log" noValidate onSubmit={handleLogin}>
      <div className="login__container">
        <NavLink to="/" className="login__logo"></NavLink>
        <h1 className="login__title">
          Рады видеть!
        </h1>

        <label className="input__label" htmlFor="email" >E-mail</label>
        <input
          className="register__input input"
          name="email"
          id="email"
          type="text"
          value={values.email || ""}
          onChange={handleInputsChange}
          placeholder="Почта"
          minLength={5}
          maxLength={50}
          pattern="^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$"
          required />
        <span className="input__error">{errors.email}</span>
        <label className="input__label" htmlFor="password">Пароль</label>
        <input
          className="register__input input"
          id="password"
          name='password'
          type="password"
          value={values.password || ""}
          placeholder="Пароль"
          maxLength={50}
          minLength={6}
          onChange={handleInputsChange}
          required />
        <span className="input__error">{errors.password}</span>
        <p className={`input__error-message ${errorMessage && 'input__error-message_visible'}`}>{errorMessage}</p>

        <button type="submit" className={`button login__button ${!isValid && 'button_disabled'}`} disabled={!isValid} title="Войти">Войти</button>

        <div className="message">
          <p className="message__text">Еще не зарегистрированы?</p>
          <Link to="/signup" className="message__link">Регистрация</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
