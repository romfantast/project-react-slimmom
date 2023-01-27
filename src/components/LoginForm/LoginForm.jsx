import React from 'react';
import css from './LoginForm.module.css';

function LoginForm() {
  return (
    <section>
      <form className={css.loginForm}>
        <h4 className={css.title}>Log In</h4>
        <label className={css.labelEmail}>
          Email*
          <input type="text" />
        </label>
        <label className={css.labelPass}>
          Password*
          <input type="text" />
        </label>
        <button type="submit">Log In</button>
        <button type="button">Register</button>
      </form>
    </section>
  );
}

export default LoginForm;
