import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { searchMovies } from '../../utils/searchMovies';
import ApiMyMovies from '../Api/ApiMyMovies';

function SavedMovies(props) {

    const [resultSearchMovies, setResultSearchMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [startingSearch, setStartingSearch] = useState(true);
    const [allMovies, setAllMovies] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [myMoviesPage, setMyMoviesPage] = useState(true);

    const getAllMovies = () => {
        ApiMyMovies.getCards()
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
        console.log("функция вызвалась")
    }, [search, checkboxValue, notFound, allMovies]);


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
                    myMoviesPage={myMoviesPage}
                    deleteMovies={props.deleteMovies}
                />
            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;