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

const API = { register, login, logout, currentUser };
export default API;
