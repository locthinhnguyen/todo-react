import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { todoApi } from '../apis/todo';

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log('todoDetail: ', todoDetail);

  const [todo, setTodo] = useState({
    name: '',
    description: '',
    point: Number,
    isDone: '',
  });
  console.log('todo: ', todo);

  const updateHandle = async () => {
    try {
      const res = await todoApi.update({
        todoId: todo?._id,
        ...todo,
      });
      console.log('res:asdadasd ', res);
      setTodo(res.data);
      console.log('res.data: ', res.data);
      navigate(`/`);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const deleteHandle = async () => {
    try {
      console.log('todo: ', todo);

      const res = await todoApi.deleted(todo?._id);
      // console.log('todoId: ', todo?.id);
      setTodo(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const getTodoDetail = async (id) => {
    try {
      const res = await todoApi.todobyid(id);
      // console.log('res: ', res);
      setTodo(res.data);
      // console.log('res.data: ', res.data);
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
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
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
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Point</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="point"
            type="number"
            placeholder="number"
            value={todo.point}
            onChange={(e) => setTodo({ ...todo, point: e.target.value })}
          />
        </div>
        <div className=" flex items-center gap-5">
          <label className=" text-gray-700 text-sm font-bold">Done</label>
          <input
            className="border rounded w-full py-2 px-3"
            id="isDone"
            type="checkbox"
            value={todo.isDone}
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
