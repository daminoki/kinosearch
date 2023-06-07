import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';

function Nav() {

  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.nav__link} ${styles.nav__link_active}` : `${styles.nav__link}`}>
            <svg width="24" height="24">
              <use xlinkHref="#home-icon"></use>
            </svg>
            Главная
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/films" className={({ isActive }) => isActive ? `${styles.nav__link} ${styles.nav__link_active}` : `${styles.nav__link}`}>
            <svg width="24" height="24">
              <use xlinkHref="#film-icon"></use>
            </svg>
            Фильмы
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;