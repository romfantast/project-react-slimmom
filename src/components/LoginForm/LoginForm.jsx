import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
    dispatch(authOperations.login(credentials)).unwrap();

    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <h4 className={css.title}>Log In</h4>
        <label className={css.labelEmail}>
          Email*
          <input
            type="email"
            onChange={handleChange}
            value={email}
            name="email"
          />
        </label>
        <label className={css.labelPass}>
          Password*
          <input type="password" onChange={handleChange} name="password" />
        </label>
        <button type="submit">Log In</button>
        <NavLink to="/registration">
          <button type="button">Register</button>
        </NavLink>
      </form>
    </section>
  );
}

export default LoginForm;
