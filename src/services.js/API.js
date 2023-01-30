import axios from 'axios';

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
  const { data } = await axios.get('https://slimmom-backend.goit.global/user');
  return data;
};

const refresh = async sid => {
  return await axios.post('/auth/refresh', { sid });
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

const getUserInfo = async () => {
  return await axios.get('/user');
};

const searchProducts = async search => {
  return await axios.get(`/product/?search=${search}`);
};

// Post an eaten product
const addEatenProduct = async params => {
  return await axios.post('/day', params);
};

// Delete eaten product
const deleteEatenProduct = async (dayId, eatenProductId) => {
  return await axios.delete('/day', {
    data: { dayId, eatenProductId },
  });
};

const API = {
  register,
  login,
  logout,
  currentUser,
  dailyRateUserId,
  getInfoForDay,
  getUserInfo,
  refresh,
  searchProducts,
  addEatenProduct,
  deleteEatenProduct,
};
export default API;
