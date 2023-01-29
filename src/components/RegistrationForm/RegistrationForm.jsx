import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations, { login } from 'redux/auth/auth-operations';
import css from './RegistrationForm.module.css';
import { NavLink } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setUsername(value);
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
    const credentials = { username, email, password };
    console.log(credentials);
    dispatch(authOperations.register(credentials))
      .unwrap()
      .then(() => {
        dispatch(login({ email, password }));
      })
      .catch(error => console.error(error));

    setUsername('');
    setEmail('');
    setPassword('');
  };
  return (
    <section>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <h4 className={css.title}>Register</h4>
        <label className={css.labelPass}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={username}
          />
        </label>
        <label className={css.labelEmail}>
          Email*
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label className={css.labelPass}>
          Password*
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit">Register</button>
        <NavLink to="/login">
          <button type="button">Log In</button>
        </NavLink>
      </form>
    </section>
  );
}

export default RegistrationForm;
