import React from 'react';
import Logo from "../../images/headerLogo.svg";
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {

    return (
        <section className='authorization'>
            <Link className="authorization__link" to="/">
                <img className="authorization__logo" src={Logo} alt='логотип сайта'></img>
            </Link>
            <h2 className='authorization__title'>Добро пожаловать!</h2>
            <form class="authorization__form" action="#" name="authorization-form" novalidate>
                <fieldset className='authorization__fieldset'>
                    <div className='authorization__input-conteiner'>
                        <label className='authorization__label' for='authorization__input-name'>Имя</label>
                        <input type="text" id="authorization__input-name" className="authorization__input" placeholder='Введите имя' name="name" required minlength="2" maxlength="30" />
                    </div>
                    <div className='authorization__input-conteiner'>
                        <label className='authorization__label' for='authorization__input-email'>E-mail</label>
                        <input type="email" id="authorization__input-email" className="authorization__input" placeholder='Введите email' name="email" required minlength="5" maxlength="30" />
                    </div>
                    <div className='authorization__input-conteiner'>
                        <label className='authorization__label' for='authorization__input-password'>Пароль</label>
                        <input type="password" id="authorization__input-password" className="authorization__input" placeholder='Введите пароль' name="password" required minlength="6" maxlength="30" />
                    </div>
                </fieldset>
                <span className="authorization__error authorization__input-{tupe-error}"></span>
                <buttom className='authorization__button' type='submit'>Зарегестрироваться</buttom>
                <div className='authorization__question-conteiner'>
                    <p className='authorization__question'>Уже зарегистрированы?</p>
                    <Link className="authorization__question-link" to="/signin">Войти</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;