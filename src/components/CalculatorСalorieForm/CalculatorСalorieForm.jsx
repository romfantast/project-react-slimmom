import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './CalculatorСalorieForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { dailyRate } from 'redux/dailyRate/dailyRate-operations';
import { selectKcal } from 'redux/dailyRate/dailyRate-selectors';
import { selectToken } from 'redux/auth/auth-selectors';
import { dailyRateUserId } from 'redux/dailyDateUserId/dailyDateUserId-operations';
import { selectUserId } from 'redux/user/user-selectors';

function CalculatorСalorieForm() {
  const [userData] = useState(() => {
    return JSON.parse(localStorage.getItem('userData'));
  });
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const id = useSelector(selectUserId);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const kcal = useSelector(selectKcal);
  const notAllowedProducts = useSelector(
    state => state?.dailyRate?.notAllowedProducts
  );
  const [values, setValues] = useState({
    weight: userData?.weight ?? '',
    height: userData?.height ?? '',
    age: userData?.age ?? '',
    desiredWeight: userData?.desiredWeight ?? '',
    bloodType: userData?.bloodType ?? '',
  });

  const handleToggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  function formSubmit(evt) {
    evt.preventDefault();
    const userData = {
      weight: Number(values.weight),
      height: Number(values.height),
      age: Number(values.age),
      desiredWeight: Number(values.desiredWeight),
      bloodType: Number(values.bloodType),
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    if (token) {
      const userDataWithId = {
        userData,
        id,
      };
      dispatch(dailyRateUserId(userDataWithId));
    } else {
      dispatch(dailyRate(userData)).then(() => {
        resetForm();
        handleToggleModal();
      });
    }
  }

  const resetForm = () => {
    setValues({
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    });
  };

  return (
    <section>
      <div className={css.formWrapper}>
        <h1 className={css.title}>
          Calculate your daily calorie intake right now
        </h1>
        <form className={css.form} onSubmit={formSubmit}>
          <div className={css.calculatorForm}>
            <label>
              Height*
              <input
                type="number"
                onChange={handleChange}
                value={values.height}
                name="height"
                required
              />
            </label>
            <label>
              Desired weight *
              <input
                type="number"
                onChange={handleChange}
                name="desiredWeight"
                value={values.desiredWeight}
                required
              />
            </label>
            <label>
              Age*
              <input
                type="number"
                name="age"
                value={values.age}
                onChange={handleChange}
                required
              />
            </label>
            <label className={css.inputBlood}>
              Blood type*
              <input type="text" disabled />
              <span>
                <label>
                  <input
                    type="radio"
                    value="1"
                    name="bloodType"
                    onChange={handleChange}
                  />
                  1
                </label>
                <label>
                  <input
                    type="radio"
                    value="2"
                    name="bloodType"
                    onChange={handleChange}
                  />
                  2
                </label>
                <label>
                  <input
                    type="radio"
                    value="3"
                    name="bloodType"
                    onChange={handleChange}
                  />
                  3
                </label>
                <label>
                  <input
                    type="radio"
                    value="4"
                    name="bloodType"
                    onChange={handleChange}
                  />
                  4
                </label>
              </span>
            </label>
            <label>
              Current weight *
              <input
                type="number"
                name="weight"
                value={values.weight}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button className={css.btnSubmitFrom}>Start losing weight</button>
        </form>
      </div>
      {isOpenModal && (
        <Modal
          onToggleModal={handleToggleModal}
          kcal={kcal}
          notAllowedProducts={notAllowedProducts}
        />
      )}
    </section>
  );
}

export default CalculatorСalorieForm;
