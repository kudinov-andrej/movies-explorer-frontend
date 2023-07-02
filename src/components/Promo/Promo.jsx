import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo({ scrollToSection }) {


    return (
        <section className='project-title'>
            <h2 className='project-title__title'>Учебный проект студента факультета Веб-разработки.</h2>
            <NavTab
                scrollToSection={scrollToSection}
            />
        </section>
    );
}

export default Promo;
