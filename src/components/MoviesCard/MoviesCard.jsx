import React, { useState, useContext } from 'react';
import './MoviesCard.css';
import ApiMyMovies from '../Api/ApiMyMovies'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard(props) {

    const [like, setLike] = useState(false);

    const baseUrl = "https://api.nomoreparties.co";
    const relativePath = props.card.image.url;
    const fullUrl = baseUrl + relativePath;

    const currentUser = useContext(CurrentUserContext);

    const movieData = {
        country: props.card.country,
        director: props.card.director,
        duration: props.card.duration,
        year: props.card.year,
        description: props.card.description,
        image: baseUrl + props.card.image.url,
        trailerLink: props.card.trailerLink,
        thumbnail: baseUrl + props.card.image.url,
        owner: currentUser._id,
        movieId: props.card.id,
        nameRU: props.card.nameRU,
        nameEN: props.card.nameEN,
    };


    const handleLikeClick = () => {
        if (like) {
            const deleteCard = props.myCards.find(card => card.movieId === props.card.id);
            if (deleteCard) {
                props.deleteMovies(deleteCard);
                console.log("карточка удалена", deleteCard);
                return;
            } else {
                console.log("Объект не найден");
            }
        } else {
            if (!props.myMoviesPage) {
                props.createMovies(movieData);
                setLike(!like);
            } else {
                props.deleteMovies(props.card);
            }
        }
    };


    return (
        <div className='movies-card'>
            <a className='movies-card__link' href={props.card.trailerLink} target='blank'>
                <img className="movies-card__image" src={props.myMoviesPage ? props.card.image : fullUrl} alt="фотография из фильма" />
            </a>
            <div className='movies-card__content'>
                <h2 className="movies-card__name">{props.card.nameRU}</h2>
                <button
                    type="button"
                    className={
                        props.myMoviesPage
                            ? "movies-card__hard movies-card__hard_active"
                            : like
                                ? "movies-card__hard movies-card__hard_active"
                                : "movies-card__hard"
                    }
                    onClick={handleLikeClick}
                ></button>
            </div>
            <p className='movies-card__duration'>{props.card.duration}</p>
        </div>
    );
}

export default MoviesCard;