import { API_URL, axiosInstance } from '.';

const url = 'todo';

const create = async (data) => {
  const res = await axiosInstance.post(`${API_URL}/${url}/create`, data);
  return res.data;
};

const mytodos = async (page, limit) => {
  const res = await axiosInstance.get(
    `${API_URL}/${url}/my-todos?page=${page}&limit=${limit}`
  );
  return res.data;
};

const todobyid = async (id) => {
  const res = await axiosInstance.get(`${API_URL}/${url}/detail?todoId=${id}`);
  return res.data;
};

const update = async () => {
  const res = await axiosInstance.patch(`${API_URL}/${url}/update`);
  return res.data;
};

const deleted = async (id) => {
  const res = await axiosInstance.delete(`${API_URL}/${url}/delete`);
  return res.data;
};

export const todoApi = {
  create,
  mytodos,
  todobyid,
  update,
  deleted,
};
