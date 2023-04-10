import React from 'react';
import axios from 'axios';

import styles from './PopularTvShows.module.scss';

const PopularTvShows = () => {
  const [shows, setShows] = React.useState([]);

  const fetchShows = async () => {
    try {
      const { data } = await axios.get('https://api.kinopoisk.dev/v1/movie?page=1&limit=10&type=tv-series&top250=%21null', {
        headers: {
          'x-api-key': '26VY6W0-4BRMYG8-MY8VVQ7-SVJRV2V'
        }
      });
      setShows(data);
      console.log(shows);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      await fetchShows();
    }

    fetchData();
  }, []);

  return (
    <div className={styles['popular-shows']}>
      <p className={styles['popular-shows__title']}>Популярные сериалы</p>
      <ul className={styles['popular-shows__list']}>
        {/* {shows.map((show, index) => (
          <li
            key={index}
            className={styles['popular-shows__item']}
          >
            {show}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default PopularTvShows;