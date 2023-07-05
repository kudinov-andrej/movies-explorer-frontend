import React, { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm(props) {

    const [search, setSearch] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);

    function searchMovies() {
        const filteredMovies = props.cards.filter((card) =>
            Object.values(card).some((value) =>
                typeof value === "string" && value.toLowerCase().includes(search.toLowerCase())
            )
        );
        props.setSearchMovies(filteredMovies);
        if (checkboxValue) {
            const filteredMoviesLessThan40Mins = filteredMovies.filter((card) =>
                card.duration < 40
            );
            props.setSearchMovies(filteredMoviesLessThan40Mins);
        }
    }

    function handleSearchChange(evt) {
        setSearch(evt.target.value);
    }

    function handleCheckboxValueChange(evt) {
        setCheckboxValue(evt.target.checked)
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        searchMovies()
    }

    useEffect(() => {
        searchMovies()
    }, [search, checkboxValue]);

    return (
        <form className='movies__form' onSubmit={handleSubmit}>
            <div className='movies__input-conteiner'>
                <input className='movies__input' placeholder='Фильм' value={search} onChange={handleSearchChange} required></input>
                <button className='movies__button' type='submit'>Поиск</button>
            </div>
            <div className='movies__checkbox-conteiner'>
                <input type="checkbox" className='movies__checkbox' id='movies__checkbox' value={checkboxValue} onChange={handleCheckboxValueChange}></input>
                <label className='movies__label' for='movies__checkbox'>Короткометражки</label>
            </div>
        </form>
    );
}

export default SearchForm;