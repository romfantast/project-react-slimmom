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

// Get info for day
const getInfoForDay = async date => {
  return await axios.post('/day/info', date);
};

// Get user info
const getUserInfo = async () => {
  return await axios.get('/user');
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
};
export default API;
