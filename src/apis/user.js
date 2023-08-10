import { API_URL, axiosInstance } from '.';

const url = 'users';

const login = async (data) => {
  const res = await axiosInstance.post(`${API_URL}/${url}/login`, data);

  return res.data;
};

const register = async (data) => {
  const res = await axiosInstance.post(`${API_URL}/${url}/register`, data);

  return res.data;
};

export const userApi = {
  login,
  register,
};
