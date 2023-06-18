import './Login.css';

function Login() {

  return (
    <form className="login" name="log">
      <div className="login__container">
        <a href="/" className="login__logo"></a>
        <h1 className="login__title">
          Рады видеть!
        </h1>
        <span className="login__error">Что-то пошло не так...</span>
        <label className="login__label" for="email" >E-mail</label>
        <input className="login__input" id="email" type="email" placeholder="Почта" maxLength={50} required />
        <span className="login__error">Что-то пошло не так...</span>
        <label className="login__label" for="password">Пароль</label>
        <input className="login__input" id="password" type="password" placeholder="Пароль" maxLength={50} minLength={8} required />
        <span className="login__error login__error_active">Что-то пошло не так...</span>
        <button type="submit" className="login__button">Войти</button>
        <div className="login__message">
          <p className="login__text">Еще не зарегистрированы?</p>
          <a href="/signup" className="login__register">Регистрация</a>
        </div>
      </div>
    </form>
  );
}

export default Login;
