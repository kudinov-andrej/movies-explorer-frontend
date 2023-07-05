import React, { useState } from 'react';
import Logo from "../../images/headerLogo.svg";
import { Link } from 'react-router-dom';
import './Register.css';

function Register(props) {

    const [form, setForm] = useState({
        name: "",
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
        props.registerUser(form);
    }

    return (
        <section className='authorization'>
            <Link className="authorization__link" to="/">
                <img className="authorization__logo" src={Logo} alt='логотип сайта'></img>
            </Link>
            <h2 className='authorization__title'>Добро пожаловать!</h2>
            <form class="authorization-form" action="#" name="authorization-form" onSubmit={handleSabmit}>
                <fieldset className='authorization-form__fieldset'>
                    <div className='authorization-form__input-conteiner'>
                        <label className='authorization-form__label' for='authorization-form__input-name'>Имя</label>
                        <input type="text" id="authorization-form__input-name" className="authorization-form__input" placeholder='Введите имя' name="name" required minLength="2" maxLength="30" value={form.name} onChange={handleChange} />
                    </div>
                    <div className='authorization-form__input-conteiner'>
                        <label className='authorization-form__label' for='authorization-form__input-email'>E-mail</label>
                        <input type="email" id="authorization-form__input-email" className="authorization-form__input" placeholder='Введите email' name="email" required minLength="5" maxLength="30" value={form.email} onChange={handleChange} />
                    </div>
                    <div className='authorization-form__input-conteiner'>
                        <label className='authorization-form__label' for='authorization-form__input-password'>Пароль</label>
                        <input type="password" id="authorization-form__input-password" className="authorization-form__input" placeholder='Введите пароль' name="password" required minLength="6" maxLength="30" autocomplete="current-password" value={form.password} onChange={handleChange} />
                    </div>
                </fieldset>
                <span className="authorization-form__error authorization-form__input-{tupe-error}"></span>
                <button className='authorization-form__button' type='submit'>Зарегестрироваться</button>
            </form>
            <div className='authorization-form__question-conteiner'>
                <p className='authorization-form__question'>Уже зарегистрированы?</p>
                <Link className="authorization-form__question-link" to="/signin">Войти</Link>
            </div>
        </section>
    );
}

export default Register;