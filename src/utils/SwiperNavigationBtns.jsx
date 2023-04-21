import React from 'react';
import { useSwiper } from 'swiper/react';
import PropTypes from 'prop-types';

SwiperButtonNext.propTypes = {
  children: PropTypes.node.isRequired,
};

export function SwiperButtonNext ({ children }) {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>{children}</button>
  );
}

SwiperButtonPrev.propTypes = {
  children: PropTypes.node.isRequired,
};
  
export function SwiperButtonPrev ({ children }) {
  const swiper = useSwiper();
  
  return (
    <button onClick={() => swiper.slidePrev()}>{children}</button>
  );
}