import React from 'react';
import './Portfolio.css';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <nav className='portfolio__navigation'>
                <ul className='portfolio__conteiner'>
                    <li className='portfolio__link-punkt'>
                        <a className='portfolio__link' href="https://kudinov-andrej.github.io/art/" target='blank'>
                            <button className='portfolio__button'>
                                <p className='button__text'>Одностраничный сайт</p>
                                <p className='button__arrow'>&#8599;</p>
                            </button>
                        </a>
                    </li>
                    <li className='portfolio__link-punkt'>
                        <a className='portfolio__link' href="https://kudinov-andrej.github.io/russian-travel/" target='blank'>
                            <button className='portfolio__button'>
                                <p className='button__text'>Адаптивный сайт</p>
                                <p className='button__arrow'>&#8599;</p>
                            </button>
                        </a>
                    </li>
                    <li className='portfolio__link-punkt'>
                        <a className='portfolio__link' href="https://mesta.nomoredomains.rocks" target='blank'>
                            <button className='portfolio__button'>
                                <p className='button__text'>Одностраничное приложение</p>
                                <p className='button__arrow'>&#8599;</p>
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Portfolio;
