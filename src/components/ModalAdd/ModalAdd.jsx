import React from 'react';

import css from './ModalAdd.module.css';

function ModalAdd({ setShowMobileModalAdd }) {
  const handleIconCrossClick = () => {
    setShowMobileModalAdd(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section>
      <div className={css.modalAdd}>
        <span className={css.iconCross} onClick={handleIconCrossClick}>
          +
        </span>
        <form className={css.mobileFormAdd} onSubmit={handleSubmit}>
          <label>
            Enter product name
            <input type="text" />
          </label>
          <label>
            Grams
            <input type="text" />
          </label>

          <button type="submit">Add</button>
        </form>
      </div>
    </section>
  );
}

export default ModalAdd;
