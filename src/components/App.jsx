import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Route, Routes } from 'react-router';
import CalculatorСalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';
import Layout from './Layout/Layout';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import DiaryPage from '../pages/DiaryPage/DiaryPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import userOperations from 'redux/user/user-operations';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(userOperations.current());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CalculatorСalorieForm />} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="diary" element={<DiaryPage />} />
        </Route>
        <Route path="*" element={<h2>Not found</h2>} />
      </Route>
    </Routes>
  );
};
