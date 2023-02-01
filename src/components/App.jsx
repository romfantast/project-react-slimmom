import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import CalculatorСalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import userOperations from 'redux/user/user-operations';
import authOperations from 'redux/auth/auth-operations';
import { selectIsAuth } from 'redux/auth/auth-selectors';
import DiaryPage from 'pages/DiaryPage/DiaryPage';

const CalculatorPage = lazy(() =>
  import('../pages/CalculatorPage/CalculatorPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(authOperations.refreshUser()).then(() =>
        dispatch(userOperations.current())
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

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
        <Route
          path="*"
          element={
            <section>
              <h3>Not found</h3>
            </section>
          }
        />
      </Route>
    </Routes>
  );
};
