import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {

    const [searchMovies, setSearchMovies] = useState([]);

    return (
        <>
            <Header
                handleСhangePopapNavBar={props.handleСhangePopapNavBar}
                isOpenPopapNavBar={props.isOpenPopapNavBar}
                islogin={props.islogin}
            />
            <section className='movies'>
                <SearchForm
                    cards={props.cards}
                    setSearchMovies={setSearchMovies}
                />
                <MoviesCardList
                    cards={searchMovies}
                />
                <button className='movies__add-card'>Ещё</button>
            </section>
            <Footer />
        </>
    );
}

export default Movies;