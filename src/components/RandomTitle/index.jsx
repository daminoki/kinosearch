import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './RandomTitle.module.scss';

const RandomTitle = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  const fetchRandomMovie = async () => {
    try {
      const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie/random', {
        headers: {
          'x-api-key': '26VY6W0-4BRMYG8-MY8VVQ7-SVJRV2V'
        }
      });
      setRandomMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchRandomMovie();
    }

    fetchData();
  }, []);

  console.log(randomMovie);

  return (
    <div className={styles['random-movie']}>
      <p className={styles['random-movie__title']}>Выбери случайный фильм на вечер</p>
      {randomMovie && 
        <div className={styles['random-movie__item']}>
          <div className={styles['random-movie__img']}>
            <img src={randomMovie.poster.url} alt="Постер" width="400" height="550" />
          </div>
          <div className={styles['random-movie__column']}>
            <div className={styles['random-movie__info']}>
              <p className={styles['random-movie__property']}>Название: <span>{randomMovie.name}</span></p>
              <p className={styles['random-movie__property']}>Описание: <span>{randomMovie.description ? randomMovie.description : '-'}</span></p>
              <p className={styles['random-movie__property']}>Жанр: <span>{randomMovie.genres[0].name}</span></p>
              <p className={styles['random-movie__property']}>Рейтинг кинопоиска: <span>{randomMovie.rating.kp}</span></p>
              <p className={styles['random-movie__property']}>Год выпуска: <span>{randomMovie.year}</span></p>
              <p className={styles['random-movie__property']}>Время: <span>{randomMovie.movieLength ? randomMovie.movieLength : '-'}</span></p>
              <p className={styles['random-movie__property']}>Страна: {randomMovie.countries.map((country) => (<span key={country.id}>{country.name}</span>))}</p>
            </div>
            <button className={styles['random-movie__btn']} onClick={fetchRandomMovie}>Выбрать другой фильм</button>
          </div>
        </div> 
      }
    </div>
  );
};

export default RandomTitle;