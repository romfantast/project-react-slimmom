import React from 'react';
import css from './DiaryAddProductForm.module.css';
import API from 'services.js/API';
import { useState } from 'react';

function DiaryAddProductForm({ startDate }) {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isOpenSearcHedList, setIsOpenSearcHedList] = useState(false);
  const [searchedInputValue, setSearchedInputValue] = useState('');
  const [productId, setProductId] = useState('');
  const [grams, setGrams] = useState('');

  const handleChange = async e => {
    const searchQuery = e.target.value;
    setSearchedInputValue(searchQuery);
    try {
      if (searchQuery) {
        const { data } = await API.searchProducts(searchQuery);
        console.log(data);
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
      date: startDate,
      productId,
      weight: grams,
    };
    try {
      const { data } = await API.addEatenProduct(productData);
      console.log(data);
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
          />
        </label>
        <label>
          <span>Grams</span>
          <input
            type="number"
            className={css.inputGram}
            value={grams}
            onChange={handleChangeGrams}
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
