import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [islogin, setIslogin] = useState(false);

  const [isOpenPopapNavBar, setIsopenPopapNavBar] = useState(false);

  function handleСhangePopapNavBar() {
    setIsopenPopapNavBar(!isOpenPopapNavBar)
  }

  const currentYear = new Date().getFullYear();

  return (
    <body className="app">
      <Header
        handleСhangePopapNavBar={handleСhangePopapNavBar}
        isOpenPopapNavBar={isOpenPopapNavBar}
        islogin={islogin}
      />
      <Main />
      <Footer />
    </body >
  );
}

export default App;
