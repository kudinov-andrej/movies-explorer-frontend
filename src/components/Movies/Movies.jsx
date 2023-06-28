import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {

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

export default Movies;