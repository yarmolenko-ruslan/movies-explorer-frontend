import './Register.css';

function Register() {

  return (
    <form className="register" name="reg">
      <div className="register__container">
        <a href="/" className="register__logo"></a>
        <h1 className="register__title">
          Добро пожаловать!
        </h1>
        <label className="input__label" for="name" >Имя</label>
        <input className="register__input input" id="name" type="text" placeholder="Имя" maxLength={50} required />
        <span className="input__error">Что-то пошло не так...</span>
        <label className="input__label" for="email" >E-mail</label>
        <input className="register__input input" id="email" type="email" placeholder="Почта" maxLength={50} required />
        <span className="input__error ">Что-то пошло не так...</span>
        <label className="input__label" for="password">Пароль</label>
        <input className="register__input input" id="password" type="password" placeholder="Пароль" maxLength={50} minLength={2} required />
        <span className="input__error input__error_active">Что-то пошло не так...</span>
        <button className="button" type="submit">Зарегистрироваться</button>
        <div className="message">
          <p className="message__text">Уже зарегистрированы?</p>
          <a href="/signin" className="message__link">Войти</a>
        </div>
      </div>
    </form>
  );
}

export default Register;
