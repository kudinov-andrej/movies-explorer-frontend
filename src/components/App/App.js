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
        islogin={islogin} />
    </body>
  );
}

export default App;
