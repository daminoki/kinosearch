import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <NavLink to='/'>
          <img className={styles.header__logo} src='/img/logo.svg' />
        </NavLink>
        <div className={styles.header__right}>
          <div className={styles['header__search-container']}>
            <input className={styles.header__search} type='search' placeholder='Название фильма, сериала, актера или режиссера' />
            <button className={styles['header__search-icon']}></button>
          </div>
          <NavLink to='/my-profile' className={({ isActive }) => isActive ? `${styles.header__profile} ${styles.header__profile_active}` : `${styles.header__profile}`}>
            <svg width="24" height="24">
              <use xlinkHref="#profile-icon"></use>
            </svg>
          </NavLink>
        </div>
      </div>
    </header> 
  );
};

export default Header;