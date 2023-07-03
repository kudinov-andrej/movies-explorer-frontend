import React from 'react';
import './SearchForm.css';

function SearchForm() {

    return (
        <form className='movies__form'>
            <div className='movies__input-conteiner'>
                <input className='movies__input' placeholder='Фильм' required></input>
                <button className='movies__button'>Поиск</button>
            </div>
            <div className='movies__checkbox-conteiner'>
                <input type="checkbox" className='movies__checkbox' id='movies__checkbox' value="yes"></input>
                <label className='movies__label' for='movies__checkbox'>Короткометражки</label>
            </div>
        </form>
    );
}

export default SearchForm;