import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import api from '../../api';

import BaseLayout from '../BaseLayout';
import Loader from '../Loader';
import styles from './FilmsList.module.scss';

function FilmsList () {
  const {id} = useParams();
  const { state } = useLocation();

  const [films, setFilms] = React.useState(null);

  const searchParams = {
    page: '1',
    limit: '50',
    type: 'movie',
    [id]: '!null',
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

  const getValue = (value) => {
    return value ? value : '-';
  };

  console.log(films);

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
      <div className={styles['films-list__body']}>
        {!films && <Loader />}
        {films &&
          <ul className={styles['films-list__list']}>
            {films.map((film) => (
              <li key={film.id} className={styles['films-list__item']}>
                <span className={styles['films-list__count']}>{films.indexOf(film) + 1}</span>
                <div className={styles['films-list__info']}>
                  <div className={styles['films-list__poster']}>
                    <img src={film.poster.url} alt={film.name}></img>
                  </div>
                  <div className={styles['films-list__main-info']}>
                    <p className={styles['films-list__name']}>{film.name}</p>
                    <div className={styles['films-list__secondary-info']}>
                      <span className={styles['films-list__year']}>{`${getValue(film.alternativeName)}, ${film.year}, ${getValue(film.movieLength)} мин.`}</span>
                      <span className={styles['films-list__country']}>{`${film.countries[0].name}, ${film.genres[0].name}`}</span>
                    </div>
                    <p className={styles['films-list__summary']}>{film.shortDescription}</p>
                    <p className={styles['films-list__rate']}>{`Кинопоиск: ${film.rating.kp}, IMBD: ${film.rating.imbd}`}</p>
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