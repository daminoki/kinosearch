import React from 'react';

import BaseLayout from '../../components/BaseLayout';
import FilmsCompilation from '../../components/FilmsCompilation';

import styles from './Films.module.scss';

function Films() {
  return (
    <BaseLayout>
      <p className={styles.films__title}>Списки</p>
      <FilmsCompilation />
    </BaseLayout>
  );
}

export default Films;