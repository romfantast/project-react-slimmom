import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './RightSideBar.module.css';
import { selectDailyRateUserId } from 'redux/dailyDateUserId/dailyDateUserId-selectors';
import { useEffect } from 'react';
import { infoUser } from 'redux/info/info-operations';

const TODAY = new Date().toLocaleDateString('en-CA');

function RightSideBar() {
  const dailyRate = useSelector(state => state?.dailyRate?.dailyRate);
  const notAllowedProducts = useSelector(
    state => state?.dailyRate?.notAllowedProducts
  );
  const dailyRateUserId = useSelector(selectDailyRateUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(infoUser({ date: TODAY }));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div>
        <h3>Summary for 20/06/2020</h3>
        <p>
          <span>Left</span> <span>000 kcal</span>
        </p>
        <p>
          <span>Consumed</span> <span>000 kcal</span>
        </p>
        <p>
          <span>Daily rate </span>
          <span>{dailyRate || dailyRateUserId} kcal</span>
        </p>
        <p>
          <span>n% of normal</span> <span>000 kcal</span>
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
