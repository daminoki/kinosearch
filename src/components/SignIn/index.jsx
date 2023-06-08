import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './SignIn.module.scss';

function SignIn() {
  const [passwordType, setPasswordType] = useState('password');
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const {
    register,
    // handleSubmit,
    formState: { errors }
  } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const togglePasswordType = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  // const onSubmit = () => {
  //   logIn(formValue.email, formValue.password);
  // };

  return (
    <>
      <form className={styles.form} autoComplete='off'>
        <p className={styles.form__title}><span>Войдите,</span> чтобы добавлять фильмы в закладки</p>
        <label className={styles.form__subtitle} htmlFor="email">
          E-mail:
        </label>
        <input
          {...register('email', {
            required: 'Это поле обязательно для заполнения',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Введите корректный email адрес'
            }
          })}
          className={styles.form__input}
          id="email"
          name="email"
          placeholder="Введите email"
          value={formValue.email}
          onChange={handleInputChange}
        ></input>
        {errors.email?.message}
        <div className={styles.form__wrapper}>
          <label className={styles.form__subtitle} htmlFor="password">
            Пароль:
          </label>
          <button
            type="button"
            onClick={togglePasswordType}
            className={styles.form__checker}
          >
            <svg width="24" height="24">
              {passwordType === 'password'
                ? <use xlinkHref="#hide-icon"></use>
                : <use xlinkHref="#show-icon"></use>
              }
            </svg>
          </button>
        </div>
        <input
          {...register('password', {
            required: 'Это поле обязательно для заполнения',
            minLength: {
              value: 6,
              message: 'Минимальная длина пароля 6 символов'
            }
          })}
          className={styles.form__input}
          type={passwordType}
          id="password"
          name="password"
          placeholder="Введите пароль"
          value={formValue.password}
          onChange={handleInputChange}
        ></input>
        {errors.password?.message}
        <button
          className={styles.form__button}
          type="submit"
        // onSubmit={handleSubmit(onSubmit)}
        >
          Войти
        </button>
      </form>
    </>
  );
}

export default SignIn;