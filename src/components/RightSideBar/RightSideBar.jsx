import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './RightSideBar.module.css';
import { selectDailyRateUserId } from 'redux/dailyDateUserId/dailyDateUserId-selectors';
import { useEffect } from 'react';
import { infoUser } from 'redux/info/info-operations';
import { selectNotAllowedProducts } from 'redux/user/user-selectors';

const TODAY = new Date().toLocaleDateString('en-CA');

function RightSideBar({ startDate }) {
  const dailyRate = useSelector(
    state => state?.infoUser?.daySummary?.dailyRate
  );
  const kcalLeft = useSelector(
    state => state?.infoUser?.daySummary?.kcalLeft || state?.infoUser?.kcalLeft
  );
  const kcalConsumed = useSelector(
    state =>
      state?.infoUser?.daySummary?.kcalConsumed || state?.infoUser?.kcalConsumed
  );
  const percentsOfDailyRate = useSelector(
    state =>
      state?.infoUser?.daySummary?.percentsOfDailyRate ||
      state?.infoUser?.percentsOfDailyRate
  );
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  const dailyRateUserId = useSelector(selectDailyRateUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(infoUser({ date: TODAY }));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div>
        <h3>
          Summary for {startDate || new Date().toLocaleDateString('en-CA')}
        </h3>
        <p>
          <span>Left</span> <span>{Math.round(kcalLeft) || '0'} kcal</span>
        </p>
        <p>
          <span>Consumed </span>
          <span>{Math.round(kcalConsumed) || '0'} kcal</span>
        </p>
        <p>
          <span>Daily rate </span>
          <span>{Math.round(dailyRate || dailyRateUserId) || '0'} kcal</span>
        </p>
        <p>
          <span>{Math.round(percentsOfDailyRate) || '0'}% of normal </span>
          <span>{Math.round(kcalConsumed) || '0'} kcal</span>
        </p>
      </div>

      <h3 className={css.title}>Food not to recommended</h3>
      <ul className={css.notAllowedProductsList}>
        {notAllowedProducts.length ? (
          notAllowedProducts.map((product, index) => (
            <li key={product}>{`${index + 1}. ${product}`}</li>
          ))
        ) : (
          <p>No products</p>
        )}
      </ul>
    </div>
  );
}

export default RightSideBar;
