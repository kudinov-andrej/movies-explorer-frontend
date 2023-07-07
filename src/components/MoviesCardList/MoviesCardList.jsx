import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

    return (
        <>
            {props.preloader ? <Preloader /> : ""}
            <p className='movies__text'>
                {props.startingSearch ? "" : "«Нужно ввести ключевое слово»"}
                {props.startingSearch ? (props.notFound ? "«Ничего не найдено»" : "") : ""}
            </p>
            <div className='movies__list'>
                {props.cards.map((card, index) => (
                    <MoviesCard key={index}
                        card={card}
                        createMovies={props.createMovies}
                        myMoviesPage={props.myMoviesPage}
                        setLike={props.setLike}
                        like={props.like}
                        deleteMovies={props.deleteMovies}
                        myCards={props.myCards}
                    />
                ))}
            </div>
        </>
    );
}

export default MoviesCardList;