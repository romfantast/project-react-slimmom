import React from 'react';
import css from './DiaryAddProductForm.module.css';

function DiaryAddProductForm() {
  return (
    <div>
      <form className={css.diaryForm}>
        <label>
          <span>Enter product name</span>
          <input type="text" className={css.inputName} />
        </label>
        <label>
          <span>Grams</span>
          <input type="number" className={css.inputGram} />
        </label>

        <button>+</button>
      </form>
    </div>
  );
}

export default DiaryAddProductForm;
