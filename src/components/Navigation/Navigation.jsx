import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import headerIconMain from "../../images/headerIcon-main.svg";


function Navigation(props) {


    return (
        <nav className={props.islogin ? 'header__navigation' : 'header__navigation-no-login'}>
            <ul className={props.islogin ? 'header__link-container' : 'header__link-container-off'}>
                <li className='header__link-punkt'><NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/movies">Фильмы</NavLink></li>
                <li className='header__link-punkt'><NavLink className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`} to="/saved-movies">Сохраненные фильмы</NavLink></li>
            </ul>
            <button className='header__button-mobile' onClick={props.handleСhangePopapNavBar} ></button>
            <ul className='header__button-container'>
                <li className={props.islogin ? 'header__link-punkt-of' : 'header__link-punkt'}><NavLink className='header__link' to="/signup"><button className='header__button'>Регистрация</button></NavLink></li>
                <li className={props.islogin ? 'header__link-punkt-of' : 'header__link-punkt'}><NavLink className='header__link' to="/signin"><button className='header__button'>Войти</button></NavLink></li>
                <li className={props.islogin ? 'header__link-punkt' : 'header__link-punkt-of'}><NavLink className='header__link' to="/profile"><button className='header__button header__button_tupy_accaunt'>
                    <p className='button__text'>Аккаунт</p>
                    <img className='button__img' src={headerIconMain} alt='изображение человечка'></img>
                </button></NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;