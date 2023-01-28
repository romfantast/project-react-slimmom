import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import css from './Logo.module.css';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

function Logo() {
  const token = useSelector(selectToken);
  return (
    <div className={css.logoWrapper}>
      <NavLink to={token ? '/calculator' : '/'}>
        <img className={css.logo} src={logo} alt="" />
        <span className={css.logoText}>
          Slim<span>Mom</span>
        </span>
      </NavLink>
    </div>
  );
}

export default Logo;
