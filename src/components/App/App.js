import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import ProjectTitle from '../ProjectTitle/ProjectTitle';

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
        <ProjectTitle />
      </main>
    </body>
  );
}

export default App;
