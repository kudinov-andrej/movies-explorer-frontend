import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { searchMyMovies } from '../../utils/searchMyMovies';

function SavedMovies(props) {
    const [search, setSearch] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [startingSearch, setStartingSearch] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [myMoviesPage, setMyMoviesPage] = useState(true);

    const getAllMovies = () => {
        if (props.startingSearchMyPage) {
            searchMyMovies(props.cards, search, checkboxValue, props.setResultSearchMyMovies, setNotFound);
            setPreloader(true);
            setTimeout(() => {
                setPreloader(false);
            }, 500)
        } else {
            props.setResultSearchMyMovies(props.cards)
            setStartingSearch(false)
            setPreloader(true);
            setTimeout(() => {
                setPreloader(false);
            }, 500)
        }
    };

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
                    getAllMovies={getAllMovies}
                    searchMovies={searchMyMovies}
                    setSearch={setSearch}
                    setCheckboxValue={setCheckboxValue}
                    setStartingSearch={setStartingSearch}
                    search={search}
                    checkboxValue={checkboxValue}
                    setPreloader={setPreloader}
                    myMoviesPage={myMoviesPage}
                    allMovies={props.cards}
                    setNotFound={setNotFound}
                    setResultSearchMovies={props.setResultSearchMyMovies}
                    inactiveButtonStartSearch={props.inactiveButtonStartSearch}
                    setInactiveButtonStartSearch={props.setInactiveButtonStartSearch}
                    errorMessageSearchForm={props.errorMessageSearchForm}
                    setErrorMessageSearchForm={props.setErrorMessageSearchForm}
                    setStartingSearchMyPage={props.setStartingSearchMyPage}
                />
                <MoviesCardList
                    cards={props.resultSearchMyMovies}
                    startingSearch={startingSearch}
                    notFound={notFound}
                    preloader={preloader}
                    myMoviesPage={myMoviesPage}
                    deleteMovies={props.deleteMovies}
                />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;