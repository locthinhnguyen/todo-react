import { API_URL, axiosInstance } from '.';

const url = 'todo';

const create = async (data) => {
  const res = await axiosInstance.post(`${API_URL}/${url}/create`, data);
  return res.data;
};

// "name": "1231Gio10121323",
//     "description": "Gio la hien tuong thien nhi2en1",
//     "point": 20,
//     "isDone": false

const mytodos = async (page, limit) => {
  const res = await axiosInstance.get(
    `${API_URL}/${url}/my-todos?page=${page}&limit=${limit}`
  );
  return res.data;
};

// "data": [
//     {
//         "_id": "64d4b56a55c76329d1fa7f59",
//         "name": "1231Gio1012132",
//         "description": "Gio la hien tuong thien nhi2en1",
//         "point": 20,
//         "isDone": false,
//         "createdByUserId": "64d4a468ab3819296cccff83",
//         "createdAt": "2023-08-10T10:01:14.005Z",
//         "updatedAt": "2023-08-10T10:01:14.005Z",
//         "__v": 0
//     },

const todobyid = async (id) => {
  const res = await axiosInstance.get(`${API_URL}/${url}/detail?todoId=${id}`);
  return res.data;
};

// "data": {
//     "_id": "64d4b56a55c76329d1fa7f59",
//     "name": "1231Gio1012132",
//     "description": "Gio la hien tuong thien nhi2en1",
//     "point": 20,
//     "isDone": false,
//     "createdByUserId": "64d4a468ab3819296cccff83",
//     "createdAt": "2023-08-10T10:01:14.005Z",
//     "updatedAt": "2023-08-10T10:01:14.005Z",
//     "__v": 0
// }

const update = async (data) => {
  const res = await axiosInstance.patch(`${API_URL}/${url}/update`, data);
  return res.data;
};

// {
//     "todoId": "64d4b56a55c76329d1fa7f59",
//     "name": "Gio",
//     "description": "Gio la hien tuong thien nhien",
//     "point": 10
// }
const deleted = async (todoId) => {
  console.log('todoId: ', todoId);
  const res = await axiosInstance.delete(`${API_URL}/${url}/delete`, {
    todoId: todoId,
  });
  return res.data;
};

// {
//     "todoId": "64d4ac0355c76329d1fa7f44"
// }

export const todoApi = {
  create,
  mytodos,
  todobyid,
  update,
  deleted,
};
