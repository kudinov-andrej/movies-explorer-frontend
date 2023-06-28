import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {


    return (
        <div className='movies__list'>
            {props.cards.map((card, index) => (
                <MoviesCard key={index} />
            ))}
        </div>
    );
}

export default MoviesCardList;