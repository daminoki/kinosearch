import React, { useState, useEffect } from 'react';

import api from '../../api';
import Loader from '../Loader';

import styles from './RandomTitle.module.scss';

const RandomTitle = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  const fetchRandomMovie = async () => {
    const data = await api.movie.getRandomTitle();
    setRandomMovie(data);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchRandomMovie();
    }

    fetchData();
  }, []);

  const getValue = (value, info = '') => {
    return value ? `${value} ${info}` : '-';
  };

  const getMovieLength = (movieLength) => {
    if (isNaN(movieLength)) {
      return '-';
    }
    const hours = Math.trunc(movieLength / 60);
    const minutes = movieLength % 60;
    return hours + 'ч. ' + minutes + 'м.';
  };

  return (
    <div className={styles['random-movie']}>
      <p className={styles['random-movie__title']}>Случайный фильм на вечер</p>
      {!randomMovie && <Loader />}
      {randomMovie && 
        <div className={styles['random-movie__item']}>
          <div className={styles['random-movie__img']}>
            <img src={randomMovie.poster.url} alt="Постер" width="400" height="550" />
          </div>
          <div className={styles['random-movie__column']}>
            <div className={styles['random-movie__info']}>
              <p className={styles['random-movie__name']}>{randomMovie.name}</p>
              <p className={styles['random-movie__property']}>Описание: <span>{getValue(randomMovie.description)}</span></p>
              <p className={styles['random-movie__property']}>Жанр: <span>{randomMovie.genres[0].name}</span></p>
              <p className={styles['random-movie__property']}>Рейтинг кинопоиска: <span>{randomMovie.rating.kp}</span></p>
              <p className={styles['random-movie__property']}>Рейтинг imdb: <span>{randomMovie.rating.imdb}</span></p>
              <p className={styles['random-movie__property']}>Год выпуска: <span>{randomMovie.year}</span></p>
              <p className={styles['random-movie__property']}>Продолжительность: <span>{getMovieLength(getValue(randomMovie.movieLength))}</span></p>
              <p className={styles['random-movie__property']}>Страна: <span>{randomMovie.countries[0].name}</span></p>
              <p className={styles['random-movie__property']}>Возрастной рейтинг: <span>{getValue(randomMovie.ageRating, '+')}</span></p>
              {randomMovie.videos && randomMovie.videos.trailers[0] && <a className={styles['random-movie__btn']} target="_blank" href={randomMovie.videos.trailers[0].url} rel="noreferrer">Смотреть трейлер</a>}
            </div>
          </div>
        </div> 
      }
    </div>
  );
};

export default RandomTitle;