import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import api from '../../api';

import BaseLayout from '../BaseLayout';
import Loader from '../Loader';
import styles from './FilmsList.module.scss';

function FilmsList () {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [films, setFilms] = React.useState(null);

  const searchParams = {
    page: '1',
    limit: '50',
    top250: state.top250,
    'persons.id': state.person,
    top10: state.top10,
    type: state.type,
    sortField: 'rating.kp',
  };

  const fetchFilms = async () => {
    const data = await api.movie.getFilmsList(searchParams);
    setFilms(data.docs);
  };

  React.useEffect(() => {
    async function fetchData() {
      await fetchFilms();
    }

    fetchData();
  }, []);

  const handleFilmClick = (id) => {
    navigate(`/catalog/${id}`);
  };

  const getValue = (value) => {
    return (value && value !== null) ? value : '-';
  };

  const getFilmPoster = (value) => {
    return (value && value !== null) ? value.url : '../img/placeholder.png';
  };

  const getFilmName = (value, film) => {
    return (value && value !== null) ? value : film.alternativeName;
  };

  const getFilmList = (array) => {
    return (
      array.map((country, index) => (
        (index <= 1) ? <span key={index}>{(index === 1) ? ',' : ''} {country.name}</span> : ' '
      ))
    );
  };

  const sortFilms = async (params) => {
    searchParams['genres.name'] = params;

    const data = await api.movie.getFilmsList(searchParams);
    setFilms(data.docs);
  };

  return (
    <BaseLayout>
      <Link to='/films'>
        <p className={styles['films-list__back']}>Все списки</p>
      </Link>
      <div className={styles['films-list__header']}>
        <div className={styles['films-list__column']}>
          <p className={styles['films-list__title']}>{state.title}</p>
          <p className={styles['films-list__description']}>{state.description}</p>
        </div>
        <div className={styles['films-list__img']}>
          <img src={state.img} alt={state.title} width='160' height='160'></img>
        </div>
      </div>
      <div className={styles['films-list__filter']}>
        <button className={styles['films-list__filter-item']} onClick={() => sortFilms('драма')}>Драма</button>
        <button className={styles['films-list__filter-item']} onClick={() => sortFilms('комедия')}>Комедия</button>
        <button className={styles['films-list__filter-item']} onClick={() => sortFilms('биография')}>Биография</button>
      </div>
      <div className={styles['films-list__body']}>
        {!films && <Loader />}
        {films &&
          <ul className={styles['films-list__list']}>
            {films.map((film) => (
              <li key={film.id} className={styles['films-list__item']} onClick={() => handleFilmClick(film.id)}>
                <span className={styles['films-list__count']}>{films.indexOf(film) + 1}</span>
                <div className={styles['films-list__info']}>
                  <div className={styles['films-list__poster']}>
                    <img src={getFilmPoster(film.poster)} alt={film.name}></img>
                  </div>
                  <div className={styles['films-list__main-info']}>
                    <p className={styles['films-list__name']}>{getFilmName(film.name, film)}</p>
                    <div className={styles['films-list__secondary-info']}>
                      <span className={styles['films-list__year']}>{`${getValue(film.alternativeName)}, ${film.year}, ${getValue(film.movieLength)} мин.`}</span>
                      <span className={styles['films-list__country']}>{getFilmList(film.countries)}</span>
                      <span className={styles['films-list__genres']}>{getFilmList(film.genres)}</span>
                    </div>
                    <p className={styles['films-list__summary']}>{film.shortDescription}</p>
                    <p className={styles['films-list__rate']}>{`Кинопоиск: ${film.rating.kp}, IMDB: ${film.rating.imdb}`}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>}
      </div>
    </BaseLayout>
  );
}

export default FilmsList;