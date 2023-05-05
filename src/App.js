import React from 'react';

import './assets/styles/reset.scss';
import './assets/styles/variables.scss';
import './App.css';

import Header from './components/Header';
import PopularTvShows from './components/PopularTvShows';
import RandomTitle from './components/RandomTitle';

function App() {

  return (
    <>
      <Header />
      <PopularTvShows />
      <RandomTitle />
    </>
  );
}

export default App;
