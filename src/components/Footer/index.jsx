import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__years}>© 2023 — 2023, Kinosearch Clone</p>
      <p className={styles.footer__author}>Creator:
        <a href="https://github.com/daminoki" className={styles.footer__link} target="_blank" rel="noreferrer"> github.com/daminoki</a>
      </p>
    </div>
  );
}

export default Footer;