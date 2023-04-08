import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__logo} src='./img/logo.svg' />
        <input className={styles.header__search} type='search' placeholder='Название фильма, сериала, актера или режиссера' />
      </div>
    </header> 
  );
};

export default Header;