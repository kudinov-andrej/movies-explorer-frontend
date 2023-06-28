import React from 'react';
import './Techs.css';


function Techs() {

    return (
        <section className='techs' id='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__conteiner'>
                <h3 className='techs__subtitle'>7 технологий</h3>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__list'>
                    <li className='techs__item'>HTML</li>
                    <li className='techs__item'>CSS</li>
                    <li className='techs__item'>JS</li>
                    <li className='techs__item'>REACT</li>
                    <li className='techs__item'>GIT</li>
                    <li className='techs__item'>Express.js</li>
                    <li className='techs__item'>mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;
