import React, { useEffect } from 'react';
import './SearchForm.css';
import { searchMovies } from '../../utils/searchMovies';

function SearchForm(props) {



    useEffect(() => {
        if (props.myMoviesPage) {
            props.getAllMovies()
        };
    }, [props.cards]);

    function startSearch() {
        if (window.location.pathname === '/saved-movies') {
            props.setStartingSearchMyPage(true)
        }
        props.setPreloader(true)
        props.setStartingSearch(false)
        props.getAllMovies()

    }

    function handleSearchChange(evt) {
        props.setSearch(evt.target.value);
        searchMovies(props.allMovies, props.search, evt.target.value, props.setResultSearchMovies, props.setNotFound);
        if (window.location.pathname === '/movies') {
            localStorage.setItem("search", evt.target.value);
        }
        if (evt.target.value !== "") {
            props.setInactiveButtonStartSearch(false)
            props.setErrorMessageSearchForm("")
        } else {
            props.setInactiveButtonStartSearch(true)
            props.setErrorMessageSearchForm("Введите запрос")
        }
    }

    function handleCheckboxValueChange(evt) {
        props.setCheckboxValue(evt.target.checked)
        searchMovies(props.allMovies, props.search, evt.target.checked, props.setResultSearchMovies, props.setNotFound);
        if (window.location.pathname === '/movies') {
            localStorage.setItem("checkboxValue", JSON.stringify(evt.target.checked));
        }

    }

    function handleSubmit(evt) {
        evt.preventDefault();
        startSearch();
    }

    return (
        <form className='movies__form' onSubmit={handleSubmit}>
            <div className='movies__input-conteiner'>
                <input className='movies__input' placeholder='Фильм' value={props.search} onChange={handleSearchChange} required></input>
                <button className={`movies__button ${props.inactiveButtonStartSearch ? 'movies__button_disabled' : ''}`}
                    type='submit'
                    disabled={props.inactiveButtonStartSearch}>Поиск</button>
            </div>
            <span className="movies__form-error">{props.errorMessageSearchForm}</span>
            <div className='movies__checkbox-conteiner'>
                <input type="checkbox" className='movies__checkbox' id='movies__checkbox' checked={props.checkboxValue} onChange={handleCheckboxValueChange}></input>
                <label className='movies__label' for='movies__checkbox'>Короткометражки</label>
            </div>
        </form>
    );
}

export default SearchForm;