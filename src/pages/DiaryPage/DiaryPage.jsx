import React, { useEffect, useState } from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './DiaryPage.module.css';
import { BsCalendarCheck } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { infoUser } from 'redux/info/info-operations';

function DiaryPage() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    const date = startDate.toLocaleDateString('en-CA');
    console.log(date);

    dispatch(infoUser({ date }));
  }, [dispatch, startDate]);

  return (
    <div className={css.flexContainer}>
      <section>
        <div className={css.dateWrapper}>
          <span className={css.date}>
            {startDate.toLocaleDateString('en-CA')}
          </span>
          <label className={css.datePickerWrapper}>
            <BsCalendarCheck />
            <span>
              <DiaryDateСalendar
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </span>
          </label>
        </div>

        <DiaryAddProductForm startDate={startDate} />
        <DiaryProductsList />
      </section>

      <RightSideBar startDate={startDate.toLocaleDateString('en-CA')} />
    </div>
  );
}

export default DiaryPage;
