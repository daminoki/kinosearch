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
          img: '../img/top250.png',
          top250: '!null',
          type: 'movie',
        }}>
          <img src='./img/top250.png' width='88' height='88' alt='Топ 250 фильмов'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>250 лучших фильмов</p>
            <p className={styles['films-compilation__count']}>250 лучших фильмов по версии Кинопоиска</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to='/films/top10' className={styles['films-compilation__item']} state={{
          title: '10 лучших фильмов', 
          description: 'Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.', 
          img: '../img/top10.webp',
          top10: '!null'
        }}>
          <img src='./img/top10.webp' width='88' height='88' alt='Топ 10 фильмов'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>Топ 10 фильмов за месяц</p>
            <p className={styles['films-compilation__count']}>10 лучших фильмов по версии Кинопоиска</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to='/films/christofer-nolan' className={styles['films-compilation__item']} state={{
          title: 'Фильмы Кристофера Нолана', 
          description: 'Кристофер Нолан — британский и американский кинорежиссёр, сценарист и продюсер. Один из самых кассовых режиссёров в истории, а также один из самых известных и влиятельных кинематографистов.', 
          img: '../img/nolan.jpeg',
          person: 41477,
          type: 'movie'
        }}>
          <img src='./img/nolan.jpeg' width='88' height='88' alt='Кристофер Нолан'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>Фильмы Кристофера Нолана</p>
            <p className={styles['films-compilation__count']}>Фильмы британского и американского кинорежиссёра, сценариста и продюсера</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to='/films/christofer-nolan' className={styles['films-compilation__item']} state={{
          title: 'Фильмы с участием Леонардо ДиКаприо', 
          description: 'Леонардо ДиКаприо — американский актёр и продюсер. Лауреат многочисленных наград, включая премию «Оскар», BAFTA, премию Гильдии киноактёров США, три премии «Золотой глобус», а также «Серебряного медведя» Берлинского кинофестиваля.', 
          img: '../img/leo.jpeg',
          person: 37859,
          type: 'movie'
        }}>
          <img src='./img/leo.jpeg' width='88' height='88' alt='Леонардо ДиКаприо'/>
          <div className={styles['films-compilation__info']}>
            <p className={styles['films-compilation__title']}>Фильмы с участием Леонардо ДиКаприо</p>
            <p className={styles['films-compilation__count']}>Фильмы американского актёра и продюсера</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default FilmsCompilaition;