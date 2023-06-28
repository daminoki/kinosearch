import React from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';

import styles from './Film.module.scss';
import BaseLayout from '../../components/BaseLayout';
import Loader from '../../components/Loader';

function Film() {
  const [film, setFilm] = React.useState(null);
  const { id } = useParams();
  
  const searchParams = {
    id: id,
  };

  const fetchFilm = async () => {
    const data = await api.movie.getFilmsList(searchParams);
    setFilm(data.docs[0]);
  };

  React.useEffect(() => {
    async function fetchData() {
      await fetchFilm();
    }

    fetchData();
  }, []);

  const getFilmPoster = (value) => {
    return (value && value !== null) ? value.url : '../img/placeholder.png';
  };

  const getFilmType = (value) => {
    const filmTypes = {
      'tv-series': 'сериал',
      'movie': 'фильм',
      'cartoon': 'мультфильм',
      'tv-show': 'тв-шоу',
      'anime': 'аниме',
      'animated-series': 'мультсериал',
    };
  
    return filmTypes[value] || '';
  };

  const getReleaseYears = (serial, movie) => {
    if (serial && serial !== null) {
      return <span>{serial[0].start} - {serial[0].end}</span>;
    } else {
      return <span>{movie}</span>;
    }
  };

  const getValue = (value) => {
    return (value && value !== null) ? value : '-';
  };

  const getFilmList = (array) => {
    return (
      array.map((country, index) => (
        (index <= 1) ? <span key={index}>{(index === 1) ? ',' : ''} {country.name}</span> : ' '
      ))
    );
  };

  const getMovieLength = (movieLength) => {
    if (isNaN(movieLength)) {
      return '-';
    }
    const hours = Math.trunc(movieLength / 60);
    const minutes = movieLength % 60;
    return hours + 'ч. ' + minutes + 'м.';
  };

  console.log(film);

  return (
    <BaseLayout>
      {!film && <Loader />}
      {film && 
        <div className={styles.film__content}>
          <div className={styles.film__img}>
            <img src={getFilmPoster(film.poster)} alt={film.name}></img>
          </div>
          <div className={styles.film__info}>
            <div className={styles.film__header}>
              <p className={styles.film__name}>{film.name}</p>
              <button className={styles.film__favorites}>
                <svg width="24" height="24">
                  <use xlinkHref="#bookmark-icon"></use>
                </svg>
              </button>
            </div>
            <p className={styles.film__period}>({getFilmType(film.type)}, {getReleaseYears(film.releaseYears, film.year)})</p>
            <p className={styles['film__short-desc']}>{getValue(film.shortDescription)}</p>
            <div className={styles.film__about}>
              <p className={styles.film__title}>О сериале</p>
              <div className={styles.film__row}>
                <p className={styles.film__value}>Год производства</p>
                <p className={styles.film__res}>{getValue(film.year)}</p>
              </div>
              <div className={styles.film__row}>
                <p className={styles.film__value}>Страна</p>
                <p className={styles.film__res}>{getFilmList(film.countries)}</p>
              </div>
              <div className={styles.film__row}>
                <p className={styles.film__value}>Жанр</p>
                <p className={styles.film__res}>{getFilmList(film.genres)}</p>
              </div>
              <div className={styles.film__row}>
                <p className={styles.film__value}>Рейтинг Кинопоиска</p>
                <p className={styles.film__res}>{getValue(film.rating.kp)}</p>
              </div>
              <div className={styles.film__row}>
                <p className={styles.film__value}>Рейтинг IMDB</p>
                <p className={styles.film__res}>{getValue(film.rating.imdb)}</p>
              </div>
              <div className={styles.film__row}>
                <p className={styles.film__value}>Время</p>
                <p className={styles.film__res}>{getMovieLength(getValue(film.movieLength))}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  );
}

export default Film;