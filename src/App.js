import React from 'react';

import './assets/styles/reset.scss';
import './assets/styles/variables.scss';
import './App.scss';

import BaseLayout from './components/BaseLayout';
import PopularTvShows from './components/PopularTvShows';
import RandomTitle from './components/RandomTitle';

function App() {

  return (
    <BaseLayout>
      <PopularTvShows />
      <RandomTitle />
    </BaseLayout>
  );
}

export default App;
