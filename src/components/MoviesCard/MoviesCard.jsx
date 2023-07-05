import React, { useState } from 'react';
import './MoviesCard.css';
import Film from '../../images/film.png'
function MoviesCard(props) {

    const baseUrl = "https://api.nomoreparties.co";
    const relativePath = props.card.image.url;
    const fullUrl = baseUrl + relativePath;

    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
    }

    return (
        <div className='movies-card'>
            <a className='movies-card__link' href={props.card.trailerLink} target='blank'>
                <img className="movies-card__image" src={fullUrl} alt="фотография из фильма" />
            </a>
            <div className='movies-card__content'>
                <h2 className="movies-card__name">{props.card.nameRU}</h2>
                <button type="button" className={like ? "movies-card__hard movies-card__hard_active " : "movies-card__hard"} onClick={handleLikeClick}></button>
            </div>
            <p className='movies-card__duration'>{props.card.duration}</p>
        </div>
    );
}

export default MoviesCard;