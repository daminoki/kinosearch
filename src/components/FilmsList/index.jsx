import React from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../api';

import BaseLayout from '../BaseLayout';
import styles from './FilmsList.module.scss';

function FilmsList ({ title }) {
  const {id} = useParams();

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

  console.log(films);

  return (
    <BaseLayout>
      <Link to='/films'>
        <p className={styles['films-list__back']}>Все списки</p>
      </Link>
      <p className={styles['films-list__title']}>{title}</p>
    </BaseLayout>
  );
}

export default FilmsList;