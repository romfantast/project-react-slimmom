import React from 'react';
import css from './DiaryProductsListItem.module.css';

function DiaryProductsListItem({ product: { title, weight, kcal } }) {
  return (
    <li className={css.item}>
      <span className={css.name}>{title}</span>
      <span className={css.gram}>{Math.round(weight)} g</span>
      <span className={css.kcal}>{Math.round(kcal)} kcal</span>
      <button className={css.btn}>+</button>
    </li>
  );
}

export default DiaryProductsListItem;
