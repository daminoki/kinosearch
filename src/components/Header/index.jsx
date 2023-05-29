import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__logo} src='/img/logo.svg' />
        <div className={styles['header__search-container']}>
          <input className={styles.header__search} type='search' placeholder='Название фильма, сериала, актера или режиссера' />
          <button className={styles['header__search-icon']}></button>
        </div>
      </div>
    </header> 
  );
};

export default Header;