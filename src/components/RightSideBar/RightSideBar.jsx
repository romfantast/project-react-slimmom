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
  //   const date = useSelector(state => state?.infoUser?.date);
  const kcalLeft = useSelector(state => state?.infoUser?.daySummary?.kcalLeft);
  const kcalConsumed = useSelector(
    state => state?.infoUser?.daySummary?.kcalConsumed
  );
  const percentsOfDailyRate = useSelector(
    state => state?.infoUser?.daySummary?.percentsOfDailyRate
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
        <h3>Summary for {startDate}</h3>
        <p>
          <span>Left</span> <span>{Math.round(+kcalLeft)} kcal</span>
        </p>
        <p>
          <span>Consumed</span> <span>{Math.round(kcalConsumed)} kcal</span>
        </p>
        <p>
          <span>Daily rate </span>
          <span>{Math.round(dailyRate || dailyRateUserId)} kcal</span>
        </p>
        <p>
          <span>{Math.round(percentsOfDailyRate)}% of normal</span>{' '}
          <span>000 kcal</span>
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
