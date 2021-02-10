import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SystemState } from '../../../types';
import { authenticate } from '../../../store/actions/authActions';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const role = useSelector((state: SystemState) => state.role);
  const dispatch = useDispatch();

  const submitUserHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      personname: { value: string };
      password: { value: string };
    };
    dispatch(
      authenticate({
        name: target.personname.value,
        pw: target.password.value,
      })
    );
  };

  useEffect(() => {}, [role]);

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Login}>
        <form onSubmit={submitUserHandler}>
          <p>Username</p>
          <input
            type="text"
            name="personname"
            placeholder="Enter Username"
            autoComplete="off"
          />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
