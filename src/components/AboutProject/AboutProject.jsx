import React from 'react';
import './AboutProject.css';

function AboutProject() {

    return (
        <section className='promo' id='aboutProject'>
            <h2 className='promo__title'>О проекте</h2>
            <div className='promo__conteiner'>
                <div className='promo__item'>
                    <h3 className='promo__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='promo__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='promo__item'>
                    <h3 className='promo__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='promo__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='promo__progress'>
                <div className='promo__progress-beckend'>
                    <div className='promo__progress-beckend-item' id='promo__progress-beckend-item'>1 неделя</div>
                    <div className='promo__progress-label' for='promo__progress-beckend-item'>beck-end</div>
                </div>
                <div className='promo__progress-frontend'>
                    <div className='promo__progress-frontend-item' id='promo__progress-frontend-item'>4 недели</div>
                    <div className='promo__progress-label' for='promo__progress-frontend-item'>front-end</div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;