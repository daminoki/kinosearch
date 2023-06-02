import React from 'react';

import './assets/styles/reset.scss';
import './assets/styles/variables.scss';
import './App.scss';

import BaseLayout from './components/BaseLayout';
import PopularTvShows from './components/PopularTvShows';
import RandomTitle from './components/RandomTitle';
import SvgList from './components/SvgList';

function App() {

  return (
    <BaseLayout>
      <PopularTvShows />
      <RandomTitle />
      <SvgList />
    </BaseLayout>
  );
}

export default App;
