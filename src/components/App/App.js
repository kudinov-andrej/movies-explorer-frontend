import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
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
import * as auth from '../Api/auth';
import api from '../Api/ApiMyMovies';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [islogin, setIslogin] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    setToken(jwt);
    if (!jwt) {
      setIslogin(false);
    }
  }, [])

  useEffect(() => {
    if (islogin) {
      Promise.all([api.getCurrentUser(), api.getCards()]).then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [islogin]);

  console.log(token);

  useEffect(() => {
    if (token) {
      auth.getUserData(token).then((data) => {
        setUserData(data);
        setIslogin(true);
      })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // setIsLoading(false)
        })
    }
  }, [token, navigate]);

  const registerUser = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((response) => {
        // setUserData(response);
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const loginUser = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((data) => {
        setUserData({
          email: data.email,
          password: data.password
        })
        localStorage.setItem('jwt', data.token);
        setToken(data.token);
        setIslogin(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const logOut = () => {
    localStorage.removeItem("jwt");
    setIslogin(false);
    setToken("")
    navigate("/signup")

  }

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getCards()]).then(([userData, cards]) => {
      setCurrentUser(userData);
      setCards(cards);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((newUser) => {
      setCurrentUser(newUser);
    }).catch((err) => {
      console.error(err);
    });
  }
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
  const nCards = Array(CARDS_AMOUNT).fill(null);
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
              nCards={nCards}
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
            />}
          />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              nCards={likeCards}
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
              onUpdateUser={handleUpdateUser}
              logOut={logOut}
              userData={userData}
            />
            }
          />
          <Route path="/signin"
            element={
              <Login
                loginUser={loginUser}
              />
            }
          />
          <Route path="/signup"
            element={
              <Register
                registerUser={registerUser}
              />
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
