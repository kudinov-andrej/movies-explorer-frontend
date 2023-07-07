import React, { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm(props) {

    useEffect(() => {
        if (props.myMoviesPage) {
            startSearch();
        };
    }, []);


    function startSearch() {
        props.setStartingSearch(true)
        props.getAllMovies()
        props.setPreloader(true)
    }

    function handleSearchChange(evt) {
        props.setSearch(evt.target.value);
    }

    function handleCheckboxValueChange(evt) {
        props.setCheckboxValue(evt.target.checked)
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        startSearch();
    }

    return (
        <form className='movies__form' onSubmit={handleSubmit}>
            <div className='movies__input-conteiner'>
                <input className='movies__input' placeholder='Фильм' value={props.search} onChange={handleSearchChange} required></input>
                <button className='movies__button' type='submit'>Поиск</button>
            </div>
            <div className='movies__checkbox-conteiner'>
                <input type="checkbox" className='movies__checkbox' id='movies__checkbox' value={props.checkboxValue} onChange={handleCheckboxValueChange}></input>
                <label className='movies__label' for='movies__checkbox'>Короткометражки</label>
            </div>
        </form>
    );
}

export default SearchForm;