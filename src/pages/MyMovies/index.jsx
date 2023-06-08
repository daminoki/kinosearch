import React from 'react';

import styles from './MyMovies.module.scss';
import BaseLayout from '../../components/BaseLayout';

function MyMovies() {
  return (
    <BaseLayout>
      <div className={styles.profile__title}>Хочу посмотреть</div>
    </BaseLayout>
  );
}

export default MyMovies;