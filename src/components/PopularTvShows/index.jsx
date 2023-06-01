import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButtonNext, SwiperButtonPrev } from '../../utils/SwiperNavigationBtns';

import api from '../../api';
import Loader from '../Loader';

import styles from './PopularTvShows.module.scss';
import 'swiper/css';

const PopularTvShows = () => {
  const [shows, setShows] = React.useState(null);

  const searchParams = {
    page: '1',
    limit: '15',
    type: 'tv-series',
    top250: '!null',
  };

  const fetchShows = async () => {
    const data = await api.movie.getPopularTvShows(searchParams);
    setShows(data.docs);
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
      {!shows && <Loader />}
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
              <svg width="32" height="32">
                <use xlinkHref="#arrow"></use>
              </svg>
            </div>
          </SwiperButtonNext>
          <SwiperButtonPrev>
            <div className={styles['popular-shows__prev-btn']}>
              <svg width="32" height="32">
                <use xlinkHref="#arrow"></use>
              </svg>
            </div>
          </SwiperButtonPrev>
        </Swiper>}
    </div>
  );
};

export default PopularTvShows;