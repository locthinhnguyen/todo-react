import React, { useState } from 'react';
import { todoApi } from '../apis/todo';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  // console.log('1');
  const [newTodo, setNewTodo] = useState({
    name: '',
    description: '',
    point: 0,
    isDone: false,
  });

  const { name, description, point, isDone } = newTodo; //object destructuring

  // console.log('2');

  const handleSubmit = async () => {
    // console.log('3');
    try {
      const res = await todoApi.create(newTodo);
      console.log(res);
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  const handlerChange = (e, value) => {
    setNewTodo({ ...newTodo, [value]: e.target.value });
  };

  return (
    <div className="flex justify-center pt-5 flex-col items-center gap-5">
      <h1 className="font-bold">New Todo</h1>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex item-center gap-5">
          <label className="text-gray-700 text-sm font-bold">Name todo</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="todoName"
            type="text"
            placeholder="Name todo"
            value={name}
            onChange={(e) => handlerChange(e, 'name')}
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="text-gray-700 text-sm font-bold">Description</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="description"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => handlerChange(e, 'description')}
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="text-gray-700 text-sm font-bold">Point</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="point"
            type="number"
            placeholder="Point"
            value={point}
            onChange={(e) => handlerChange(e, 'point')}
          />
        </div>
        <div className="flex items-center gap-5">
          <label className="text-gray-700 text-sm font-bold">Done</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="isDone"
            type="checkbox"
            checked={isDone}
            onChange={(e) =>
              setNewTodo({ ...newTodo, isDone: !newTodo.isDone })
            }
          />
        </div>
      </div>
      <button className="p-2 bg-blue-400 rounded-[10px]" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Create;
