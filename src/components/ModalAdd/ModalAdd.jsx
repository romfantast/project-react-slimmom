import React from 'react';
import { createPortal } from 'react-dom';
import css from './ModalAdd.module.css';

const modalAddRoot = document.getElementById('modal-add');

function ModalAdd() {
  return createPortal(
    <div className={css.modalAdd}>
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button>add</button>
    </div>,
    modalAddRoot
  );
}

export default ModalAdd;
