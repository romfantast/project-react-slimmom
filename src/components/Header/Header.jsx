import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import css from './Header.module.css';

function Header() {
  const token = useSelector(selectToken);
  return (
    <section className={css.sectionHeader}>
      <header className={css.header}>
        <Logo />
        <Navigation />
        {token && <UserInfo />}
      </header>
    </section>
  );
}

export default Header;
