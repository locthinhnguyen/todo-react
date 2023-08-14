import React, { useState } from 'react';
import { todoApi } from '../apis/todo';

const Create = () => {
  const [newTodo, setNewTodo] = useState({
    name: '',
    description: '',
    point: Number,
    isDone: false,
  });
  console.log('newTodo: ', newTodo);

  const handleSubmit = async () => {
    try {
      const res = await todoApi.create(newTodo);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center pt-5 flex-col items-center gap-5">
      <h1 className=" font-bold"> New Todo</h1>
      <div className="flex flex-col gap-5 justify-center items-center  ">
        <div className=" flex item-center gap-5">
          <label className=" text-gray-700 text-sm font-bold ">Name todo</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="todoName"
            type="text"
            placeholder="Name todo"
            checked={newTodo.name}
            onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
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
            checked={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Point</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="point"
            type="number"
            placeholder="number"
            checked={newTodo.point}
            onChange={(e) => setNewTodo({ ...newTodo, point: e.target.value })}
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Done</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="isDone"
            type="checkbox"
            checked={newTodo.isDone}
            onChange={(e) =>
              setNewTodo({ ...newTodo, isDone: !newTodo.isDone })
            }
          />
        </div>
      </div>
      <button
        className=" p-2 bg-blue-400 rounded-[10px]"
        onClick={handleSubmit}
      >
        {' '}
        Submit
      </button>
    </div>
  );
};

export default Create;
