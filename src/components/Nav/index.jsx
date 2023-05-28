import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

function Nav() {

  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link to="/" className={styles.nav__link}>
            <img src='/img/home-icon.svg' alt="Главная" width="24" height="24"></img>
            Главная
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/films" className={styles.nav__link}>
            <img src='/img/film-icon.svg' alt="Фильмы" width="24" height="24"></img>
            Фильмы
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;