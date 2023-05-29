import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FilmsCompilation.module.scss';

function FilmsCompilaition () {
  return (
    <ul className={styles['films-compilation']}>
      <li>
        <Link to='/films/top250' className={styles['films-compilation__item']}>
          <img src='./img/top250.png' width='88' height='88' alt='Топ 250 фильмов'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>250 лучших фильмов</p>
            <p className={styles['films-compilation__count']}>250 фильмов</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to='/films/top500' className={styles['films-compilation__item']}>
          <img src='./img/top500.png' width='88' height='88' alt='Топ 500 фильмов'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>500 лучших фильмов</p>
            <p className={styles['films-compilation__count']}>500 фильмов</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default FilmsCompilaition;