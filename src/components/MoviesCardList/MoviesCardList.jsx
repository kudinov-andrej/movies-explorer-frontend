import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


function MoviesCardList(props) {

    return (
        <>
            {props.preloader ? <Preloader /> : ""}
            <p className='movies__text'>
                {props.startingSearch && !props.notFound ? "Нужно ввести ключевое слово" : (!props.startingSearch && props.notFound ? "Результаты не найдены" : "")}
                {props.errorGetAllMovies ? "«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»" : ""}
            </p>
            <div className='movies__list'>
                {props.cards.slice(0, props.cardsToShow).map((card, index) => (
                    <MoviesCard key={index}
                        card={card}
                        createMovies={props.createMovies}
                        myMoviesPage={props.myMoviesPage}
                        setLike={props.setLike}
                        like={props.like}
                        deleteMovies={props.deleteMovies}
                        myCards={props.myCards}
                        allCards={props.cards}
                    />
                ))}
            </div>
        </>
    );
}

export default MoviesCardList;