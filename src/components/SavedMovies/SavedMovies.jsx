import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

    return (
        <section className='movies'>
            <SearchForm />
            <MoviesCardList
                cards={props.cards}
            />
            <button className='movies__add-card'>Ещё</button>
        </section>
    );
}

export default SavedMovies;