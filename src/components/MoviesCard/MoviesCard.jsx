import React from 'react';
import './MoviesCard.css';
import Film from '../../images/film.png'
function MoviesCard() {

    return (
        <div className='movies-card'>
            <img className="movies-card__image" src={Film} alt="фотография из фильма" />
            <div className='movies-card__content'>
                <h2 className="movies-card__name">33 слова о дизайне</h2>
                <button type="button" className="movies-card__hard"></button>
            </div>
            <p className='movies-card__duration'>1ч 47м</p>
        </div>
    );
}

export default MoviesCard;