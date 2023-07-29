import React, { useState, useContext, useEffect } from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupPlayMovies from '../PopupPlayMovies/PopupPlayMovies';

function MoviesCard(props) {

    const [like, setLike] = useState(false);
    const [openPopupPlayMovies, setOpenPopupPlayMovies] = useState(false);


    const baseUrl = "https://api.nomoreparties.co";
    const relativePath = props.card.image.url;
    const fullUrl = baseUrl + relativePath;

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        if (openPopupPlayMovies) {
            function handleEsc(evt) {
                if (evt.key === 'Escape') {
                    setOpenPopupPlayMovies(false)
                }
            }

            document.addEventListener('keydown', handleEsc);

            return () => {
                document.removeEventListener('keydown', handleEsc);
            }
        }
    }, [openPopupPlayMovies]);

    function handlePopupCloseClick(evt) {
        if (evt.target.classList.contains('popup')) {
            setOpenPopupPlayMovies(false)
        }
    }


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

    useEffect(() => {
        if (props.allCards && props.myCards) {
            const likeCards = props.allCards.filter(card => {
                return props.myCards.some(myCard => myCard.movieId === card.id);
            });
            setLike(likeCards.some(card => card.id === props.card.id));
        }
    }, [props.myCards]);


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


    const handleOpenPopupPlayMovies = () => {
        setOpenPopupPlayMovies(true)
    }

    return (
        <>

            <div className='movies-card'>
                <img className="movies-card__image"
                    src={props.myMoviesPage ? props.card.image : fullUrl}
                    alt="фотография из фильма"
                    onClick={handleOpenPopupPlayMovies}
                />
                <div className='movies-card__content'>
                    <h2 className="movies-card__name">{props.card.nameRU}</h2>
                    <button
                        type="button"
                        className={
                            props.myMoviesPage
                                ? "movies-card__hard movies-card__hard_delete"
                                : like
                                    ? "movies-card__hard movies-card__hard_active"
                                    : "movies-card__hard"
                        }
                        onClick={handleLikeClick}
                    ></button>
                </div>
                <p className='movies-card__duration'>Продолжительность: {props.card.duration} мин.</p>
            </div>
            {openPopupPlayMovies
                ?
                <PopupPlayMovies
                    handlePopupCloseClick={handlePopupCloseClick}
                    openPopupPlayMovies={openPopupPlayMovies}
                    setOpenPopupPlayMovies={setOpenPopupPlayMovies}
                    card={props.card}

                />
                :
                ""
            }
        </>
    );
}

export default MoviesCard;