import React from 'react';

import styles from './Profile.module.scss';
import BaseLayout from '../BaseLayout';

function Profile() {
  return (
    <BaseLayout>
      <div className={styles.profile__title}>Мой профиль</div>
    </BaseLayout>
  );
}

export default Profile;