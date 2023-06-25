import React from 'react';
import './ProjectTitle.css';


function ProjectTitle() {


    return (
        <section className='project-title'>
            <h2 className='project-title__title'>Учебный проект студента факультета Веб-разработки.</h2>
            <nav className='project-title__navigation'>
                <ul className='project-title__navigation-list'>
                    <li className='project-title__navigation-item'><button className='project-title__button'>О проекте</button></li>
                    <li className='project-title__navigation-item'><button className='project-title__button'>Технологии</button></li>
                    <li className='project-title__navigation-item'><button className='project-title__button'>Студент</button></li>
                </ul>
            </nav>
        </section>
    );
}

export default ProjectTitle;
