import React from 'react';
import { NavLink } from 'react-router-dom';
import './PopapNAvBar.css';
import headerIconMain from "../../images/headerIcon-main.svg";

function PopapNavBar(props) {

    return (
        <div className={props.isOpenPopapNavBar ? 'popap popap_opened' : 'popap'}>
            <nav className='popap__navigation'>
                <button className='popap__button-close' onClick={props.handleСhangePopapNavBar}></button>
                <ul className='popap__link-container'>
                    <li className='popap__link-punkt'><NavLink className={({ isActive }) => `popap__link ${isActive ? "popap__link_active" : ""}`} to="/">Главная</NavLink></li>
                    <li className='popap__link-punkt'><NavLink className={({ isActive }) => `popap__link ${isActive ? "popap__link_active" : ""}`} to="/movies">Фильмы</NavLink></li>
                    <li className='popap__link-punkt'><NavLink className={({ isActive }) => `popap__link ${isActive ? "popap__link_active" : ""}`} to="/saved-movies">Сохраненные фильмы</NavLink></li>
                </ul>
                <NavLink className='popap__link' to="/profile">
                    <button className='popap__button-accaunt'>
                        <p className='button__accaunt-text'>Аккаунт</p>
                        <img className='button__accaunt-img' src={headerIconMain} alt='изображение человечка'></img>
                    </button>
                </NavLink>
            </nav>
        </div>
    );
}

export default PopapNavBar;