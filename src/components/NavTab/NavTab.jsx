import React from 'react';
import './NavTab.css';

function NavTab({ scrollToSection }) {

    return (
        <nav className='project-title__navigation'>
            <ul className='project-title__navigation-list'>
                <li className='project-title__navigation-item'><button className='project-title__button' onClick={() => scrollToSection('aboutProject')}>О проекте</button></li>
                <li className='project-title__navigation-item'><button className='project-title__button' onClick={() => scrollToSection('techs')}>Технологии</button></li>
                <li className='project-title__navigation-item'><button className='project-title__button' onClick={() => scrollToSection('aboutMe')}>Студент</button></li>
            </ul>
        </nav>
    );
}

export default NavTab;