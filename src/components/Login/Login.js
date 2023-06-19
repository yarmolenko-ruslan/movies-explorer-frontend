import './Login.css';

function Login() {

  return (
    <form className="login" name="log">
      <div className="login__container">
        <a href="/" className="login__logo"></a>
        <h1 className="login__title">
          Рады видеть!
        </h1>

        <label className="input__label" for="email" >E-mail</label>
        <input className="register__input input" id="email" type="email" placeholder="Почта" maxLength={50} required />
        <span className="input__error">Что-то пошло не так...</span>
        <label className="input__label" for="password">Пароль</label>
        <input className="register__input input" id="password" type="password" placeholder="Пароль" maxLength={50} minLength={2} required />
        <span className="input__error input__error_active">Что-то пошло не так...</span>
        <button type="submit" className="button login__button">Войти</button>
        <div className="message">
          <p className="message__text">Еще не зарегистрированы?</p>
          <a href="/signup" className="message__link">Регистрация</a>
        </div>
      </div>
    </form>
  );
}

export default Login;
