import React from 'react';
import Logo from "../../images/headerLogo.svg";
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <section className='login'>
            <Link className="login__link" to="/">
                <img className="login__logo" src={Logo} alt='логотип сайта'></img>
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form class="login__form" action="#" name="login-form" novalidate>
                <fieldset className='login__fieldset'>
                    <div className='login__input-conteiner'>
                        <label className='login__label' for='login__input-email'>E-mail</label>
                        <input type="email" id="login__input-email" className="login__input" placeholder='Введите email' name="email" required minlength="5" maxlength="30" />
                    </div>
                    <div className='login__input-conteiner'>
                        <label className='login__label' for='login__input-password'>Пароль</label>
                        <input type="password" id="login__input-password" className="login__input" placeholder='Введите пароль' name="password" required minlength="6" maxlength="30" />
                    </div>
                </fieldset>
                <span className="login__error login__input-{tupe-error}"></span>
                <buttom className='login__button' type='submit'>Войти</buttom>
                <div className='login__question-conteiner'>
                    <p className='login__question'>Ещё не зарегистрированы?</p>
                    <Link className="login__question-link" to="/signup">Регистрация</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;