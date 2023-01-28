import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

function Modal({ onToggleModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  const handleIconCrossClick = () => {
    onToggleModal();
  };

  const handleBtnClick = () => {};

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <span className={css.iconCross} onClick={handleIconCrossClick}>
          +
        </span>
        <div className={css.contentWrapper}>
          <h2> Your recommended daily calorie intake is</h2>
          <br />
          <h2>2800 kcal</h2>
          <br />
          <hr />
          <p>Foods you should not eat</p>
          <ul>
            <li>1. Flour products</li>
            <li>2. Milk</li>
            <li>3. Red meat </li>
            <li>4. Smoked meats</li>
          </ul>
          <button className={css.btnSubmitFrom} onClick={handleBtnClick}>
            Start losing weight
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
