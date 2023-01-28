import React from 'react';
import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import css from './DiaryProductsList.module.css';

function DiaryProductsList() {
  return (
    <ul className={css.productsList}>
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
    </ul>
  );
}

export default DiaryProductsList;
