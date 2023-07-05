import React, { useState } from 'react';
import Logo from "../../images/headerLogo.svg";
import { Link } from 'react-router-dom';
import './Login.css';

function Login({ loginUser }) {

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (evt) => {
        const input = evt.target
        setForm({
            ...form,
            [input.name]: input.value,
        });

    };

    const handleSabmit = (evt) => {
        evt.preventDefault();
        loginUser(form);

    }

    return (
        <section className='login'>
            <Link className="login__link" to="/">
                <img className="login__logo" src={Logo} alt='логотип сайта'></img>
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form class="login-form" action="#" name="login-form" novalidate onSubmit={handleSabmit}>
                <fieldset className='login-form__fieldset'>
                    <div className='login-form__input-conteiner'>
                        <label className='login-form__label' for='login-form__input-email'>E-mail</label>
                        <input type="email" id="login-form__input-email" className="login-form__input" placeholder='Введите email' name="email" required minlength="5" maxlength="30" value={form.email} onChange={handleChange} />
                    </div>
                    <div className='login-form__input-conteiner'>
                        <label className='login-form__label' for='login-form__input-password'>Пароль</label>
                        <input type="password" id="login-form__input-password" className="login-form__input" placeholder='Введите пароль' name="password" autocomplete="current-password" required minlength="6" maxlength="30" value={form.password} onChange={handleChange} />
                    </div>
                </fieldset>
                <span className="login-form__error login-form__input-{tupe-error}"></span>
                <button className='login-form__button' type='submit'>Войти</button>
                <div className='login-form__question-conteiner'>
                    <p className='login-form__question'>Ещё не зарегистрированы?</p>
                    <Link className="login-form__question-link" to="/signup">Регистрация</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;