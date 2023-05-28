import React from 'react';

import './assets/styles/reset.scss';
import './assets/styles/variables.scss';
import './App.scss';

import Header from './components/Header';
import PopularTvShows from './components/PopularTvShows';
import RandomTitle from './components/RandomTitle';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <Header />
      <main className="page">
        <Nav />
        <div className="page__column">
          <PopularTvShows />
          <RandomTitle />
        </div>
      </main>
    </>
  );
}

export default App;
