import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import css from './Logo.module.css';

function Logo() {
  return (
    <div className={css.logoWrapper}>
      <NavLink to="/">
        <img className={css.logo} src={logo} alt="" />
        <span className={css.logoText}>
          Slim<span>Mom</span>
        </span>
      </NavLink>
    </div>
  );
}

export default Logo;
