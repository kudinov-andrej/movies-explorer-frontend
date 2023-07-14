import React from 'react';
import Logo from "../../images/headerLogo.svg";
import { Link } from 'react-router-dom';
import './Login.css';
import { useFormWithValidation } from '../UseFormValidation/useFormValidation';

function Login({ loginUser, errorServerMessage, setErrorServerMessage }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isValid) {
            loginUser(values);
            setErrorServerMessage("")
        }
    };

    return (
        <section className='login'>
            <Link className="login__link" to="/">
                <img className="login__logo" src={Logo} alt='логотип сайта'></img>
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form class="login-form" action="#" name="login-form" novalidate onSubmit={handleSubmit}>
                <fieldset className='login-form__fieldset'>
                    <div className='login-form__input-conteiner'>
                        <label className='login-form__label' for='login-form__input-email'>E-mail</label>
                        <input type="email"
                            id="login-form__input-email"
                            className="login-form__input"
                            placeholder='Введите email'
                            name="email"
                            required minlength="5"
                            maxlength="30"
                            value={values.email}
                            onChange={handleChange}
                            pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
                        />
                        {errors.email && <span className="login-form__error">{errors.email}</span>}
                    </div>
                    <div className='login-form__input-conteiner'>
                        <label className='login-form__label' for='login-form__input-password'>Пароль</label>
                        <input type="password"
                            id="login-form__input-password"
                            className="login-form__input"
                            placeholder='Введите пароль'
                            name="password"
                            autocomplete="current-password"
                            required minlength="6"
                            maxlength="30"
                            value={values.password}
                            onChange={handleChange} />
                        {errors.password && <span className="login-form__error">{errors.password}</span>}
                    </div>
                </fieldset>
                <span className="login-form__error login-form__error_server">{errorServerMessage}</span>
                <button className={`login-form__button ${!isValid ? 'login-form__button_disabled' : ''}`} type='submit' disabled={!isValid}>Войти</button>
                <div className='login-form__question-conteiner'>
                    <p className='login-form__question'>Ещё не зарегистрированы?</p>
                    <Link className="login-form__question-link" to="/signup">Регистрация</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;