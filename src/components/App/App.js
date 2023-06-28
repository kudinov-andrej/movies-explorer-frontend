import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [islogin, setIslogin] = useState(true);

  const [isOpenPopapNavBar, setIsopenPopapNavBar] = useState(false);

  function handleСhangePopapNavBar() {
    setIsopenPopapNavBar(!isOpenPopapNavBar)
  }

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <body className="app">
      <Header
        handleСhangePopapNavBar={handleСhangePopapNavBar}
        isOpenPopapNavBar={isOpenPopapNavBar}
        islogin={islogin}
      />
      <Routes>
        <Route path="/"
          element={<Main
            scrollToSection={scrollToSection}
          />}
        />
        <Route path="/movies"
          element={
            <section className='movies'>
              здесь будет поиск фильмов
            </section>
          }
        />
        <Route path="/saved-movies"
          element={
            <section className='movies'>
              здесь будут сохраненные фильмы
            </section>
          }
        />
      </Routes>
      <Footer />
    </body >
  );
}

export default App;
