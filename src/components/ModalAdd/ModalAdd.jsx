import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { infoUser } from 'redux/info/info-operations';
import API from 'services.js/API';

import css from './ModalAdd.module.css';
import normalizedDate from 'helpers/normalizedDate';

function ModalAdd({ setShowMobileModalAdd, startDate, handleClickClose }) {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isOpenSearcHedList, setIsOpenSearcHedList] = useState(false);
  const [searchedInputValue, setSearchedInputValue] = useState('');
  const [productId, setProductId] = useState('');
  const [grams, setGrams] = useState('');
  const dispatch = useDispatch();

  const handleChange = async e => {
    const searchQuery = e.target.value;
    setSearchedInputValue(searchQuery);
    try {
      if (searchQuery) {
        const { data } = await API.searchProducts(searchQuery);
        setSearchedProducts(data);
        setIsOpenSearcHedList(true);
      } else {
        setSearchedProducts([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = e => {
    const productName = e.target.textContent;
    setSearchedInputValue(productName);
    setProductId(e.target.id);
    setIsOpenSearcHedList(false);
  };

  const handleChangeGrams = e => {
    setGrams(e.target.value);
  };

  const handleIconCrossClick = () => {
    document.body.style.overflow = 'auto';
    setShowMobileModalAdd(false);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const productData = {
      date: startDate.toLocaleDateString('en-CA'),
      productId,
      weight: grams,
    };
    try {
      await API.addEatenProduct(productData);
      dispatch(
        infoUser({
          date: normalizedDate(startDate.toLocaleDateString('en-CA')),
        })
      );
    } catch (error) {
      console.log(error);
    }
    handleClickClose();
  };
  return (
    //  <section>
    <div className={css.modalAdd}>
      <span className={css.iconCross} onClick={handleIconCrossClick}>
        +
      </span>
      <form className={css.mobileFormAdd} onSubmit={handleSubmit}>
        <label className={css.labelName}>
          Enter product name
          <input
            type="text"
            value={searchedInputValue}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Grams
          <input
            type="number"
            value={grams}
            onChange={handleChangeGrams}
            required
          />
        </label>

        <button type="submit">Add</button>
      </form>
      {isOpenSearcHedList && (
        <div className={css.positionWrapper}>
          <div className={css.searchedListWrapper}>
            {searchedProducts.length > 0 && (
              <ul className={css.searchedProductsList}>
                {searchedProducts.map(product => (
                  <li key={product._id} id={product._id} onClick={handleClick}>
                    {product.title.ua} <hr />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
    //  </section>
  );
}

export default ModalAdd;
