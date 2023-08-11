import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { todoApi } from '../apis/todo';

const TodoDetail = () => {
  let { detail } = useParams();
  console.log('id: ', detail);
  const [todoDetail, setTodoDetail] = useState([]);

  const getTodoDetail = async (id) => {
    try {
      const res = await todoApi.todobyid(id);
      console.log('res: ', res);
      setTodoDetail(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    getTodoDetail(detail);
  }, [detail]);
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
            value={todoDetail}
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
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Point</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="point"
            type="number"
            placeholder="number"
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Done</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="point"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
