import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import apiAllMovies from '../Api/MoviesApi';
import { searchMovies } from '../../utils/searchMovies';

function Movies(props) {
    const [resultSearchMovies, setResultSearchMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [startingSearch, setStartingSearch] = useState(false);
    const [allMovies, setAllMovies] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [preloader, setPreloader] = useState(false)
    const [myMoviesPage, setMyMoviesPage] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardsToShow, setCardsToShow] = useState(0);

    const getAllMovies = () => {
        apiAllMovies.getCards()
            .then((allMovies) => {
                setAllMovies(allMovies);
                searchMovies(allMovies, search, checkboxValue, setResultSearchMovies, setNotFound);
                setPreloader(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    // отображение фильмов со стороннего апи

    useEffect(() => {
        searchMovies(allMovies, search, checkboxValue, setResultSearchMovies, setNotFound);
    }, [search, checkboxValue, notFound, allMovies]);

    // отображение требуемого количества карточек

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        calculateCardsToShow();
        setShowButton(true);
    }, [windowWidth, resultSearchMovies]);

    const calculateCardsToShow = () => {
        let newCardsToShow = 0;
        if (windowWidth >= 769) {
            newCardsToShow = 12;
        } else if (windowWidth >= 501) {
            newCardsToShow = 8;
        } else {
            newCardsToShow = 5;
        }
        setCardsToShow(newCardsToShow);
    };

    const handleShowMore = () => {
        const remainingCards = resultSearchMovies.length - cardsToShow;
        let increment;
        if (windowWidth >= 769) {
            increment = 3;
        }
        if (windowWidth <= 768) {
            increment = 2;
        }
        const newCardsToShow = Math.min(cardsToShow + increment, resultSearchMovies.length);
        setCardsToShow(newCardsToShow);
        setShowButton(newCardsToShow < resultSearchMovies.length);
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
                    cards={resultSearchMovies}
                    getAllMovies={getAllMovies}
                    searchMovies={searchMovies}
                    setSearch={setSearch}
                    setCheckboxValue={setCheckboxValue}
                    setStartingSearch={setStartingSearch}
                    search={search}
                    checkboxValue={checkboxValue}
                    setPreloader={setPreloader}
                />
                <MoviesCardList
                    cards={resultSearchMovies}
                    startingSearch={startingSearch}
                    notFound={notFound}
                    preloader={preloader}
                    createMovies={props.createMovies}
                    myMoviesPage={myMoviesPage}
                    deleteMovies={props.deleteMovies}
                    myCards={props.cards}
                    cardsToShow={cardsToShow}
                />
                <button className={showButton ? 'movies__add-card' : "movies__add-card-off"} onClick={handleShowMore}>Ещё</button>
            </section>
            <Footer />
        </>
    );
}

export default Movies;