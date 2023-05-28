import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import BaseLayout from '../BaseLayout';

import styles from './FilmsList.module.scss';

function FilmsList ({ title }) {
  const {id} = useParams();

  const [films, setFilms] = React.useState(null);

  const fetchFilms = async () => {
    try {
      const { data } = await axios.get(`https://api.kinopoisk.dev/v1/movie?page=1&limit=50&type=movie&${id}=%21null`, {
        headers: {
          'x-api-key': '26VY6W0-4BRMYG8-MY8VVQ7-SVJRV2V'
        }
      });
      setFilms(data.docs);
    } catch (error) {
      console.log(error);
    }
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