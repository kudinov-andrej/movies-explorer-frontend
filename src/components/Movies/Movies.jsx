import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {

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
                    getAllMovies={props.getAllMovies}
                    setSearchMovies={props.setSearchMovies}
                    searchMovies={props.searchMovies}
                    setSearch={props.setSearch}
                    setCheckboxValue={props.setCheckboxValue}
                    setStartingSearch={props.setStartingSearch}
                    search={props.search}
                    checkboxValue={props.checkboxValue}
                    setPreloader={props.setPreloader}
                />
                <MoviesCardList
                    cards={props.cards}
                    startingSearch={props.startingSearch}
                    notFound={props.notFound}
                    preloader={props.preloader}
                />
                <button className='movies__add-card'>Ещё</button>
            </section>
            <Footer />
        </>
    );
}

export default Movies;