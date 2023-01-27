import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            LOG IN
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="/registration"
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            REGISTRATION
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
