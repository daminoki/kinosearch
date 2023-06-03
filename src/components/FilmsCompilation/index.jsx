import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FilmsCompilation.module.scss';

function FilmsCompilaition () {
  return (
    <ul className={styles['films-compilation']}>
      <li>
        <Link to='/films/top250' className={styles['films-compilation__item']} state={{
          title: '250 лучших фильмов', 
          description: 'Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.', 
          img: '../img/top250.png'
        }}>
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
      <li>
        <Link to='/films/nolan' className={styles['films-compilation__item']} state={{
          title: 'Фильмы Кристофера Нолана', 
          description: 'Кристофер Нолан — британский и американский кинорежиссёр, сценарист и продюсер. Один из самых кассовых режиссёров в истории, а также один из самых известных и влиятельных кинематографистов.', 
          img: '../img/nolan.jpeg'
        }}>
          <img src='./img/nolan.jpeg' width='88' height='88' alt='Кристофер Нолан'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>Фильмы Кристофера Нолана</p>
            <p className={styles['films-compilation__count']}>Фильмы британского и американского кинорежиссёра, сценариста и продюсера</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default FilmsCompilaition;