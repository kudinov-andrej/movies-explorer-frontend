import React, { useState } from 'react';
import Logo from "../../images/headerLogo.svg";
import { Link } from 'react-router-dom';
import './Register.css';
import { useFormWithValidation } from '../useFormValidation';

function Register(props) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isValid) {
            props.registerUser(values);
        }
    };

    return (
        <section className='authorization'>
            <Link className="authorization__link" to="/">
                <img className="authorization__logo" src={Logo} alt='логотип сайта'></img>
            </Link>
            <h2 className='authorization__title'>Добро пожаловать!</h2>
            <form className="authorization-form" action="#" name="authorization-form" onSubmit={handleSubmit}>
                <fieldset className='authorization-form__fieldset'>
                    <div className='authorization-form__input-conteiner'>
                        <label className='authorization-form__label' htmlFor='authorization-form__input-name'>Имя</label>
                        <input type="text" id="authorization-form__input-name" className="authorization-form__input" placeholder='Введите имя' name="name" required minLength="2" maxLength="30" value={values.name || ''} onChange={handleChange} />
                        {errors.name && <span className="authorization-form__error">{errors.name}</span>}
                    </div>
                    <div className='authorization-form__input-conteiner'>
                        <label className='authorization-form__label' htmlFor='authorization-form__input-email'>E-mail</label>
                        <input type="email" id="authorization-form__input-email" className="authorization-form__input" placeholder='Введите email' name="email" required minLength="5" maxLength="30" value={values.email || ''} onChange={handleChange} />
                        {errors.email && <span className="authorization-form__error">{errors.email}</span>}
                    </div>
                    <div className='authorization-form__input-conteiner'>
                        <label className='authorization-form__label' htmlFor='authorization-form__input-password'>Пароль</label>
                        <input type="password" id="authorization-form__input-password" className="authorization-form__input" placeholder='Введите пароль' name="password" required minLength="6" maxLength="30" autoComplete="current-password" value={values.password || ''} onChange={handleChange} />
                        {errors.password && <span className="authorization-form__error">{errors.password}</span>}
                    </div>
                </fieldset>
                <span className="authorization-form__error authorization-form__error_server">{props.errorServerMessage}</span>
                <button className={`authorization-form__button ${!isValid ? 'authorization-form__button_disabled' : ''}`} type='submit' disabled={!isValid}>Зарегистрироваться</button>
            </form>
            <div className='authorization-form__question-conteiner'>
                <Link className="authorization-form__question-link" to="/signin">Войти</Link>
            </div>
        </section >
    );
}

export default Register;