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
  const [islogin, setIslogin] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [token, setToken] = useState("");
  const [cards, setCards] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [errorServerMessage, setErrorServerMessage] = useState("");
  const [ssuccessfulResponseServer, setSsuccessfulResponseServer] = useState("");
  const [inactiveButtonStartSearch, setInactiveButtonStartSearch] = useState(true);
  const [errorMessageSearchForm, setErrorMessageSearchForm] = useState('Введите запрос');
  const [isOpenPopapNavBar, setIsopenPopapNavBar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    setToken(jwt);
    setIslogin(true);
    if (!jwt) {
      setIslogin(false);
    }
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    if (jwt) {
      Promise.all([api.getCurrentUser()]).then(([userData]) => {
        setCurrentUser(userData);
        setIslogin(true);
      })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [islogin]);

  useEffect(() => {
    if (token) {
      auth.getUserData(token).then((data) => {
        setUserData(data);
        setIslogin(true);
      })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [token]);

  // создание карточки

  const createMovies = (movieData) => {
    api.createCard(movieData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        console.log('Карточка создана:', movieData);
      })
      .catch((error) => {
        console.log('Ошибка при создании карточки:', error);
      });
  };

  // удаление карточки
  function deleteMovies(card) {
    api.deleteCard(card._id).then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    }).catch((err) => {
      console.error(err);
    });
  }

  // регистрация

  const registerUser = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((response) => {
        navigate("/signin");
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message);
        setErrorServerMessage(error.message)
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
        console.log(err.message);
        setErrorServerMessage(err.message)
      })
  }

  const logOut = () => {
    localStorage.removeItem("jwt");
    setIslogin(false);
    setToken("")
    navigate("/signup")
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((newUser) => {
      setCurrentUser(newUser);
      setErrorServerMessage("")
      setSsuccessfulResponseServer("Данные успешно обновлены")
      setTimeout(() => {
        setSsuccessfulResponseServer("")
      }, 3000)
    }).catch((err) => {
      console.error(err);
      setErrorServerMessage(err.message)
    });
  }
  // открытие модального окна

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
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
              createMovies={createMovies}
              deleteMovies={deleteMovies}
              cards={cards}
              inactiveButtonStartSearch={inactiveButtonStartSearch}
              setInactiveButtonStartSearch={setInactiveButtonStartSearch}
              errorMessageSearchForm={errorMessageSearchForm}
              setErrorMessageSearchForm={setErrorMessageSearchForm}
            />}
          />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              handleСhangePopapNavBar={handleСhangePopapNavBar}
              isOpenPopapNavBar={isOpenPopapNavBar}
              islogin={islogin}
              deleteMovies={deleteMovies}
              cards={cards}
              setCards={setCards}
              inactiveButtonStartSearch={inactiveButtonStartSearch}
              setInactiveButtonStartSearch={setInactiveButtonStartSearch}
              errorMessageSearchForm={errorMessageSearchForm}
              setErrorMessageSearchForm={setErrorMessageSearchForm}
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
              setErrorServerMessage={setErrorServerMessage}
              ssuccessfulResponseServer={ssuccessfulResponseServer}
            />
            }
          />
          <Route path="/signin"
            element={
              <Login
                loginUser={loginUser}
                errorServerMessage={errorServerMessage}
                setErrorServerMessage={setErrorServerMessage}
              />
            }
          />
          <Route path="/signup"
            element={
              <Register
                registerUser={registerUser}
                errorServerMessage={errorServerMessage}
                setErrorServerMessage={setErrorServerMessage}
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
