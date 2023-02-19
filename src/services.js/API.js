import axios from 'axios';
import normalizedDate from 'helpers/normalizedDate';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const register = async user => {
  return await axios.post('/auth/register', user);
};

const login = async user => {
  return await axios.post('/auth/login', user);
};

const logout = async () => {
  return await axios.post('/auth/logout');
};

const currentUser = async () => {
  const { data } = await axios.get('/user');
  return data;
};

const dailyRateUserId = async userDataWithId => {
  return await axios.post(
    `/daily-rate/${userDataWithId.id}`,
    userDataWithId.userData
  );
};

const getInfoForDay = async date => {
  return await axios.post('/day/info', date);
};

const searchProducts = async search => {
  return await axios.get(`/product/?search=${search}`);
};

const addEatenProduct = async params => {
  const newDate = { ...params, date: normalizedDate(params.date) };
  return await axios.post('/day', newDate);
};

const deleteEatenProduct = async deleteData => {
  return await axios.delete('/day', { data: deleteData });
};

const refresh = async sid => {
  return await axios.post('/auth/refresh', { sid });
};

const API = {
  register,
  login,
  logout,
  currentUser,
  dailyRateUserId,
  getInfoForDay,
  searchProducts,
  addEatenProduct,
  deleteEatenProduct,
  refresh,
};
export default API;
