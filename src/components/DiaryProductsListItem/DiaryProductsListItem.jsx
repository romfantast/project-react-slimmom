import React from 'react';
import css from './DiaryProductsListItem.module.css';

function DiaryProductsListItem() {
  return (
    <li className={css.item}>
      <span className={css.name}>Eggplant</span>
      <span className={css.gram}>100 g</span>
      <span className={css.kcal}>320 kcal</span>
      <button className={css.btn}>+</button>
    </li>
  );
}

export default DiaryProductsListItem;
