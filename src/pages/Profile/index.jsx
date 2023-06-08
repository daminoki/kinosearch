import React from 'react';

import styles from './Profile.module.scss';
import BaseLayout from '../../components/BaseLayout';
import SignIn from '../../components/SignIn';

function Profile() {
  return (
    <BaseLayout>
      <div className={styles.profile__title}>Мой профиль</div>
      <SignIn />
    </BaseLayout>
  );
}

export default Profile;