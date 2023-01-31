import React from 'react';
import css from './DiaryAddProductForm.module.css';
import API from 'services.js/API';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { infoUser } from 'redux/info/info-operations';

function DiaryAddProductForm({ startDate }) {
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

  const handleSubmit = async e => {
    e.preventDefault();
    const productData = {
      date: startDate.toLocaleDateString('en-CA'),
      productId,
      weight: grams,
    };
    try {
      await API.addEatenProduct(productData);
      dispatch(infoUser({ date: startDate.toLocaleDateString('en-CA') }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css.block}>
      <form className={css.diaryForm} onSubmit={handleSubmit}>
        <label>
          <span>Enter product name</span>
          <input
            type="text"
            className={css.inputName}
            value={searchedInputValue}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Grams</span>
          <input
            type="number"
            className={css.inputGram}
            value={grams}
            onChange={handleChangeGrams}
            required
          />
        </label>

        <button>+</button>
      </form>

      {isOpenSearcHedList && (
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
      )}
    </div>
  );
}

export default DiaryAddProductForm;
