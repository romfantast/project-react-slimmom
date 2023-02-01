import React from 'react';
import css from './MainPage.module.css';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/auth-selectors';

function MainPage({ children }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isAuth = useSelector(selectIsAuth);
  const isShowBg = () => {
    if (!isAuth && isDesktop) {
      return css.bgDesktop;
    } else if (!isAuth && !isDesktop) {
      return css.bgTablet;
    }
  };

  return <section className={isShowBg()}>{children}</section>;
}

export default MainPage;
