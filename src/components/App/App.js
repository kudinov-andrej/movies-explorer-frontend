import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';

function App() {

  const [islogin, setIslogin] = useState(false);

  const [isOpenPopapNavBar, setIsopenPopapNavBar] = useState(false);

  function handleСhangePopapNavBar() {
    setIsopenPopapNavBar(!isOpenPopapNavBar)
  }


  return (
    <body className="app">
      <Header
        handleСhangePopapNavBar={handleСhangePopapNavBar}
        isOpenPopapNavBar={isOpenPopapNavBar}
        islogin={islogin}
      />
      <main className='content'>
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
      </main>
    </body>
  );
}

export default App;
