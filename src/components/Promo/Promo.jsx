import React from 'react';
import './Promo.css';


function Promo({ scrollToSection }) {


    return (
        <section className='project-title'>
            <h2 className='project-title__title'>Учебный проект студента факультета Веб-разработки.</h2>
            <nav className='project-title__navigation'>
                <ul className='project-title__navigation-list'>
                    <li className='project-title__navigation-item'><button className='project-title__button' onClick={() => scrollToSection('aboutProject')}>О проекте</button></li>
                    <li className='project-title__navigation-item'><button className='project-title__button' onClick={() => scrollToSection('techs')}>Технологии</button></li>
                    <li className='project-title__navigation-item'><button className='project-title__button' onClick={() => scrollToSection('aboutMe')}>Студент</button></li>
                </ul>
            </nav>
        </section>
    );
}

export default Promo;
