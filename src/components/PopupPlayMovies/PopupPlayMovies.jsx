import React from 'react';
import ReactPlayer from "react-player";
import './PopupPlayMovies.css';

function PopupPlayMovies(props) {

    const handleClosePopupClick = () => {
        props.setOpenPopupPlayMovies(false)
    }


    return (
        <section className={props.openPopupPlayMovies ? 'popup popup_opened' : 'popup'}
            onClick={props.handlePopupCloseClick}
        >
            <div className='popup__conteiner'>
                <button type="button"
                    className='popup__button-close'
                    onClick={handleClosePopupClick}
                ></button>
                <div className='popup__video-conteiner'>
                    <ReactPlayer
                        url={props.card.trailerLink}
                        className="popup__video"
                        controls
                        playing
                    />
                </div>
                <ul className='popup__video-description'>
                    <li className='popup__video-information'><span className='popup__video-information-name'>Название: </span>{props.card.nameRU}</li>
                    <li className='popup__video-information'><span className='popup__video-information-name'>Страна: </span>{props.card.country}</li>
                    <li className='popup__video-information'><span className='popup__video-information-name'>Продюссер: </span>{props.card.director}</li>
                    <li className='popup__video-information'><span className='popup__video-information-name'>Год выпуска: </span>{props.card.year}</li>
                    <li className='popup__video-information'><span className='popup__video-information-name'>О фильме:  </span>{props.card.description}</li>
                </ul>
            </div>
        </section>
    );
}


export default PopupPlayMovies;