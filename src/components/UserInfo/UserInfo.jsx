import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { selectUsername } from 'redux/user/user-selectors';
import css from './UserInfo.module.css';

function UserInfo() {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const handleLogout = () => {
    dispatch(authOperations.logout());
  };
  return (
    <div className={css.userInfo}>
      <span>
        <b>{username}</b> |{' '}
        <button onClick={handleLogout} className={css.btnExit}>
          {' '}
          Exit
        </button>
      </span>
    </div>
  );
}

export default UserInfo;
