import React from 'react';
import css from './DiaryProductsListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import API from 'services.js/API';
import { infoUser } from 'redux/info/info-operations';

function DiaryProductsListItem({
  product: { title, weight, kcal, id },
  startDate,
}) {
  const dayId = useSelector(state => state.infoUser?.dayId);
  const dispatch = useDispatch();

  const handleDeleteClick = async () => {
    console.log('delete product');
    const deleteData = { eatenProductId: id, dayId };
    try {
      await API.deleteEatenProduct(deleteData);
      dispatch(infoUser({ date: startDate }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className={css.item}>
      <span className={css.name}>
        {title.length > 23 ? title.slice(0, 23) + '...' : title}
      </span>
      <span className={css.gram}>{Math.round(weight)} g</span>
      <span className={css.kcal}>{Math.round(kcal)} kcal</span>
      <button className={css.btn} onClick={handleDeleteClick}>
        +
      </button>
    </li>
  );
}

export default DiaryProductsListItem;
