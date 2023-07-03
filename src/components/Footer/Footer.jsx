import React from 'react';
import './Footer.css';


function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className='footer__promo'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info-conteiner'>
                <p className='footer__copiraite'>&copy; {currentYear}</p>
                <nav className='footer__navigation'>
                    <ul className='footer__list'>
                        <li className='footer__link-punkt'><a className='footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a></li>
                        <li className='footer__link-punkt'><a className='footer__link' href='https://github.com/kudinov-andrej' target='blank'>Github</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;