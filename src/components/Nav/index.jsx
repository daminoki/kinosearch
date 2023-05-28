import React from 'react';

import styles from './Nav.module.scss';

function Nav() {

  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a href="#" className={styles.nav__link}>
            <img src='./img/home-icon.svg' alt="На главную" width="24" height="24"></img>
            Главная
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="#" className={styles.nav__link}>
            <img src='./img/film-icon.svg' alt="Фильмы" width="24" height="24"></img>
            Фильмы
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;