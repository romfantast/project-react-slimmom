import React from 'react';
import logo from '../../images/logo.png';
import css from './Logo.module.css';

function Logo() {
  return (
    <div className={css.logoWrapper}>
      <img className={css.logo} src={logo} alt="" />
      <span className={css.logoText}>
        Slim<span>Mom</span>
      </span>
    </div>
  );
}

export default Logo;
