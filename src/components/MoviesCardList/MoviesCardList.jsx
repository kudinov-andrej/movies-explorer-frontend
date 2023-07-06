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
                {props.startingSearch ? (props.notFound ? "результаты не найдены" : "") : ""}
            </p>
            <div className='movies__list'>
                {props.cards.map((card, index) => (
                    <MoviesCard key={index}
                        card={card}
                    />
                ))}
            </div>
        </>
    );
}

export default MoviesCardList;