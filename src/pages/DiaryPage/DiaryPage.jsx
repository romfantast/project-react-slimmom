import React, { useEffect, useState } from 'react';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './DiaryPage.module.css';
import { useDispatch } from 'react-redux';
import { infoUser } from 'redux/info/info-operations';
import { useMediaQuery } from 'react-responsive';
import ModalAdd from '../../components/ModalAdd/ModalAdd';

function DiaryPage() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const isNotMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const [showMobileModalAdd, setShowMobileModalAdd] = useState(false);

  useEffect(() => {
    const date = startDate.toLocaleDateString('en-CA');
    console.log(date);

    dispatch(infoUser({ date }));
  }, [dispatch, startDate]);

  const normalizedDate = startDate
    .toLocaleDateString('en-GB')
    .replaceAll('/', '.');

  const handleClickOpen = () => {
    document.body.style.overflow = 'hidden';
    setShowMobileModalAdd(true);
  };
  const handleClickClose = () => {
    document.body.style.overflow = 'auto';
    setShowMobileModalAdd(false);
  };

  return (
    <section>
      <div className={css.flexContainer}>
        <section>
          <div className={css.dateWrapper}>
            <span className={css.date}>{normalizedDate}</span>
            <label className={css.datePickerWrapper}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 9H13V11H15V9Z" />
                <path d="M11 9H9V11H11V9Z" />
                <path d="M7.00002 9H5V11H7.00002V9Z" />
                <path d="M17 2.00001H16V0H14V2.00001H6.00001V0H4V2.00001H3.00001C1.89001 2.00001 1.01003 2.90001 1.01003 4.00003L1 18C1 19.1 1.89001 20 3.00001 20H17C18.1 20 19 19.1 19 18V3.99998C19 2.90001 18.1 2.00001 17 2.00001ZM17 18H3.00001V6.99998H17V18Z" />
              </svg>

              <span className={css.calendarWrapper}>
                <DiaryDateСalendar
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </span>
            </label>
          </div>

          {showMobileModalAdd && (
            <ModalAdd
              handleClickClose={handleClickClose}
              setShowMobileModalAdd={setShowMobileModalAdd}
              startDate={startDate}
            />
          )}
          {isNotMobile && <DiaryAddProductForm startDate={startDate} />}

          <DiaryProductsList
            startDate={startDate.toLocaleDateString('en-CA')}
          />
          {!isNotMobile && (
            <button className={css.addBtn} onClick={handleClickOpen}>
              +
            </button>
          )}
        </section>

        <RightSideBar startDate={normalizedDate} />
      </div>
    </section>
  );
}

export default DiaryPage;
