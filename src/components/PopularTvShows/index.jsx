import React from 'react';
import axios from 'axios';
import Swiper from 'swiper/bundle';

import styles from './PopularTvShows.module.scss';
import 'swiper/css/bundle';

const PopularTvShows = () => {
  const [shows, setShows] = React.useState([]);

  const fetchShows = async () => {
    try {
      const { data } = await axios.get('https://api.kinopoisk.dev/v1/movie?page=1&limit=10&type=tv-series&top250=%21null', {
        headers: {
          'x-api-key': '26VY6W0-4BRMYG8-MY8VVQ7-SVJRV2V'
        }
      });
      setShows(data.docs);
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

  // eslint-disable-next-line no-unused-vars
  const showsSlider = new Swiper('#shows-slider', {
    loop: true,
    spaceBetween: '10',
  });

  return (
    <div className={styles['popular-shows']}>
      <p className={styles['popular-shows__title']}>Популярные сериалы</p>
      <ul className={'swiper' + ' ' + styles['popular-shows__list']} id='shows-slider'>
        <div className='swiper-wrapper'>
          {shows.map((show) => (
            <li key={show.id} className={'swiper-slide' + ' ' + styles['popular-shows__item']}>
              <img src={show.poster.previewUrl} alt='Постер' width='150' height='225' />
              <span className={styles['popular-shows__name']}>{show.name}</span>
              <div className={styles['popular-shows__details']}>
                <span className={styles['popular-shows__release-year']}>{show.releaseYears[0].start}-{show.releaseYears[0].end ? show.releaseYears[0].end : '...'}, </span>
                <span className={styles['popular-shows__type']}>{show.genres[0].name}</span>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default PopularTvShows;