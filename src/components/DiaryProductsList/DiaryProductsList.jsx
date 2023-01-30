import React from 'react';
import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import css from './DiaryProductsList.module.css';
import { useSelector } from 'react-redux';

function DiaryProductsList() {
  const eatenProducts = useSelector(state => state.infoUser?.eatenProducts);
  console.log(eatenProducts);
  return (
    <ul className={css.productsList}>
      {eatenProducts?.length ? (
        eatenProducts.map(product => (
          <DiaryProductsListItem key={product.id} product={product} />
        ))
      ) : (
        <p>no products</p>
      )}
    </ul>
  );
}

export default DiaryProductsList;
