import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { searchMyMovies } from '../../utils/searchMyMovies';
import ApiMyMovies from '../Api/ApiMyMovies';
import api from '../Api/ApiMyMovies';

function SavedMovies(props) {

    const [resultSearchMyMovies, setResultSearchMyMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [startingSearch, setStartingSearch] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [myMoviesPage, setMyMoviesPage] = useState(true);

    const getAllMovies = () => {
        api.getCards()
            .then((card) => {
                props.setCards(card);
                searchMyMovies(props.cards, search, checkboxValue, setResultSearchMyMovies, setNotFound);
                setPreloader(false);
            }).catch((err) => {
                console.error(err);
            });
    };
    // отображение фильмов со стороннего апи




    useEffect(() => {
        searchMyMovies(props.cards, search, checkboxValue, setResultSearchMyMovies, setNotFound);
        console.log("функция вызвалась")
    }, [search, checkboxValue, notFound, props.cards]);


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
                    setResultSearchMovies={setResultSearchMyMovies}

                />
                <MoviesCardList
                    cards={resultSearchMyMovies}
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