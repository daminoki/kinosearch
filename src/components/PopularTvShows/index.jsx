import React from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButtonNext, SwiperButtonPrev } from '../../utils/SwiperNavigationBtns';

import styles from './PopularTvShows.module.scss';
import 'swiper/css';

const PopularTvShows = () => {
  const [shows, setShows] = React.useState(null);

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

  return (
    <div className={styles['popular-shows']}>
      <p className={styles['popular-shows__title']}>Популярные сериалы</p>
      {!shows && 
        <div className={styles['center-body']}>
          <div className={styles['loader-circle-2']}></div>
        </div>}
      {shows && 
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          className={styles['popular-shows__list']} 
        >
          {shows.map((show) => (
            <SwiperSlide key={show.id} className={styles['popular-shows__item']}>
              <img src={show.poster.previewUrl} alt='Постер' width='150' height='225' />
              <span className={styles['popular-shows__name']}>{show.name}</span>
              <div className={styles['popular-shows__details']}>
                <span className={styles['popular-shows__release-year']}>{show.releaseYears[0].start}-{show.releaseYears[0].end ? show.releaseYears[0].end : '...'}, </span>
                <span className={styles['popular-shows__type']}>{show.genres[0].name}</span>
              </div>
            </SwiperSlide>
          ))}
          <SwiperButtonNext>
            <div className={styles['popular-shows__next-btn']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
              </svg>
            </div>
          </SwiperButtonNext>
          <SwiperButtonPrev>
            <div className={styles['popular-shows__prev-btn']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
              </svg>
            </div>
          </SwiperButtonPrev>
        </Swiper>}
    </div>
  );
};

export default PopularTvShows;