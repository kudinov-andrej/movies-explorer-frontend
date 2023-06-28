import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {

  const [islogin, setIslogin] = useState(true);

  // открытие модального окна

  const [isOpenPopapNavBar, setIsopenPopapNavBar] = useState(false);

  function handleСhangePopapNavBar() {
    setIsopenPopapNavBar(!isOpenPopapNavBar)
  }

  // скролл в блоке main

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  // временный код для отрисовки карточек

  const CARDS_AMOUNT = 12;
  const CARDS_AMOUNT_TWO = 4;
  const cards = Array(CARDS_AMOUNT).fill(null);
  const likeCards = Array(CARDS_AMOUNT_TWO).fill(null);

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
            <Movies
              cards={cards}
            />
          }
        />
        <Route path="/saved-movies"
          element={
            <SavedMovies
              cards={likeCards}
            />
          }
        />
      </Routes>
      <Footer />
    </body >
  );
}

export default App;
