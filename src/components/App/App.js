import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from "../Profile/Profile";
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({})
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
    <CurrentUserContext.Provider value={currentUser}>
      <body className="app">
        <Routes>
          <Route path="/"
            element={<Main
              scrollToSection={scrollToSection}
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
            />
            }
          />
          <Route path="/movies"
            element={<ProtectedRoute
              element={Movies}
              cards={cards}
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
            />}
          />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              cards={likeCards}
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
            />
            }
          />
          <Route path="/profile"
            element={<ProtectedRoute
              element={Profile}
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
            />
            }
          />
          <Route path="/signin"
            element={
              <Login />
            }
          />
          <Route path="/signup"
            element={
              <Register />
            }
          />
          <Route path="*"
            element={
              <NotFound />
            }
          />
        </Routes>
      </body >
    </CurrentUserContext.Provider>
  );
}

export default App;
