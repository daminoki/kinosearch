import React from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api';

import BaseLayout from '../BaseLayout';
import Loader from '../Loader';

import styles from './Film.module.scss';

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

  console.log(film);

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
      <span>{serial[0].start} - {serial[0].end}</span>;
    } else {
      <span>{movie}</span>;
    }
  };

  return (
    <BaseLayout>
      {!film && <Loader />}
      {film && 
        <div className={styles.film__content}>
          <div className={styles.film__img}>
            <img src={getFilmPoster(film.poster)} alt={film.name}></img>
          </div>
          <div className={styles.film__info}>
            <p className={styles.film__name}>{film.name}</p>
            <p className={styles.film__period}>{getFilmType(film.type)}, {getReleaseYears(film.releaseYears, film.year)}</p>
          </div>
        </div>
      }
    </BaseLayout>
  );
}

export default Film;