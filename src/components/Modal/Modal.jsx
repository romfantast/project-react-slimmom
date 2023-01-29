import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { selectToken } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const modalRoot = document.getElementById('modal-root');

function Modal({ onToggleModal, kcal, notAllowedProducts }) {
  const token = useSelector(selectToken);

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

  const handleBtnClick = () => {
    onToggleModal();
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <span className={css.iconCross} onClick={handleIconCrossClick}>
          +
        </span>
        <div className={css.contentWrapper}>
          <h2> Your recommended daily calorie intake is</h2>
          <br />
          <h2>{Math.round(kcal)} kcal</h2>
          <br />
          <hr />
          <p>Foods you should not eat</p>
          <ul className={css.notAllowedProductsList}>
            {notAllowedProducts.length ? (
              notAllowedProducts.map((product, index) => (
                <li key={product}>{`${index + 1}. ${product}`}</li>
              ))
            ) : (
              <p>No products</p>
            )}
          </ul>
          <NavLink to={token ? '/calculator' : '/registration'}>
            <button className={css.btnSubmitFrom} onClick={handleBtnClick}>
              Start losing weight
            </button>
          </NavLink>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
