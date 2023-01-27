import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
