import React from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './DiaryPage.module.css';
import { BsCalendarCheck } from 'react-icons/bs';

function DiaryPage() {
  return (
    <div className={css.flexContainer}>
      <section>
        <div className={css.dateWrapper}>
          <span className={css.date}>20.06.2020</span>
          <label className={css.datePickerWrapper}>
            <BsCalendarCheck />
            <span>
              <DiaryDateСalendar />
            </span>
          </label>
        </div>

        <DiaryAddProductForm />
        <DiaryProductsList />
      </section>

      <RightSideBar />
    </div>
  );
}

export default DiaryPage;
