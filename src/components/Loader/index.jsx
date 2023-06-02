import React from 'react';

import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles['center-body']}>
      <div className={styles['loader-circle-2']}></div>
    </div>
  );
}

export default Loader;