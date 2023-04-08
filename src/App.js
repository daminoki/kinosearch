import React from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header';


function App() {
  const getRandomFilm = async () => {
    try {
      const data = await axios.get('https://api.kinopoisk.dev/v1/movie/random', {
        headers: {
          'x-api-key': '26VY6W0-4BRMYG8-MY8VVQ7-SVJRV2V'
        }
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getRandomFilm();
  });

  return (
    <Header />
  );
}

export default App;
