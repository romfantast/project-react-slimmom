import React from 'react';
import css from './RegistrationForm.module.css';

function RegistrationForm() {
  return (
    <section>
      <form className={css.loginForm}>
        <h4 className={css.title}>Register</h4>
        <label className={css.labelPass}>
          Name
          <input type="text" />
        </label>
        <label className={css.labelEmail}>
          Email*
          <input type="text" />
        </label>
        <label className={css.labelPass}>
          Password*
          <input type="text" />
        </label>
        <button type="submit">Register</button>
        <button type="button">Log In</button>
      </form>
    </section>
  );
}

export default RegistrationForm;
