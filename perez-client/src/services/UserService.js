import axios from 'axios';
import constants from '../constants';

// API Access to Front-end JSON data transformation or decoder
const API = axios.create({
  baseURL: `${constants.HOST}/users`,
});

// Add interceptor to include the token in headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fetch users
export const fetchUsers = () => API.get('/');

// Create user
export const createUser = (user) => API.post('/', user);

// Register public viewer account
export const registerUser = (user) => API.post('/register', user);

// Update user
export const updateUser = (id, user) => API.put(`/${id}`, user);

// Delete user
export const deleteUser = (id) => API.delete(`/${id}`);

// Login user
export const loginUser = (credentials) => API.post('/login', credentials);
