import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { todoApi } from '../apis/todo';

const TodoDetail = () => {
  const navigate = useNavigate();
  // console.log('navigate: ', navigate);
  console.log('1');

  const { id } = useParams();
  console.log('id: ', id);
  console.log('2');

  const [todo, setTodo] = useState({
    name: '',
    description: '',
    point: 0,
    isDone: '',
  });
  console.log('3');
  // console.log('todo: ', todo);\

  const setTodoWithKey = (key, value) => {
    setTodo({ ...todo, [key]: value });
  };

  const updateHandle = async () => {
    console.log('4');
    try {
      const res = await todoApi.update({
        todoId: todo?._id,
        ...todo,
      });
      setTodo(res.data);
      navigate(`/`);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const deleteHandle = async () => {
    console.log('5');
    try {
      const res = await todoApi.deleted(todo?._id);
      setTodo(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const getTodoDetail = async (id) => {
    console.log('6');
    try {
      const res = await todoApi.todobyid(id);
      setTodo(res.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useEffect(() => {
    getTodoDetail(id);
  }, [id]);

  return (
    <div className=" flex flex-col justify-center items-center gap-5">
      <h1 className="text-[20px] font-bold">Todo Detail</h1>
      <div className="flex flex-col gap-5 justify-center items-center ">
        <div className=" flex item-center gap-5">
          <label className=" text-gray-700 text-sm font-bold ">Name todo</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="todoName"
            type="text"
            placeholder="Name todo"
            value={'' + todo.name}
            onChange={(e) => setTodoWithKey('name', e.target.value)}
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">
            Description
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            id="description"
            type="text"
            placeholder="description"
            value={'' + todo.description}
            onChange={(e) => setTodoWithKey('description', e.target.value)}
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Point</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="point"
            type="number"
            placeholder="number"
            value={'' + todo.point}
            onChange={(e) => setTodoWithKey('point', e.target.value)}
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Done</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="isDone"
            type="checkbox"
            value={'' + todo.isDone}
            onChange={(e) => {
              setTodo({ ...todo, isDone: !todo.isDone });
            }}
          />
        </div>
      </div>
      <button onClick={updateHandle} className=" p-2 bg-blue-400 rounded">
        Update
      </button>
      <button onClick={deleteHandle} className=" p-2 bg-red-400 rounded">
        Delete
      </button>
    </div>
  );
};

export default TodoDetail;
