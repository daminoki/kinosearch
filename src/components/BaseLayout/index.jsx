import React from 'react';

import styles from './BaseLayout.module.scss';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';

function BaseLayout({ children }) {
  return (
    <div className={styles['page-container']}>
      <Header />
      <main className={styles.page}>
        <Nav />
        <div className={styles.page__column}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BaseLayout;