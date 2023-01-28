import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import css from './Navigation.module.css';

function Navigation() {
  const token = useSelector(selectToken);
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to={token ? '/diary' : '/login'}
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            {token ? 'DIARY' : 'LOG IN'}
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to={token ? '/calculator' : '/registration'}
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            {token ? 'CALCULATOR' : 'REGISTRATION'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
