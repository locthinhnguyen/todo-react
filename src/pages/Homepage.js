import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { todoApi } from '../apis/todo';

const Homepage = () => {
  const [todo, setTodo] = useState({});
  //object not map
  // du lieu khoi tao load truoc => ui =>
  console.log('todo: ', todo);
  useEffect(() => {
    mytodos();
  }, []);

  const mytodos = async () => {
    try {
      const res = await todoApi.mytodos(1, 10);
      // console.log('res:', res);
      setTodo(res.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <div>
      {/* {todo?.map((item, index) => (
        <>
          <span>{item.name}</span>
        </>
      ))} */}
    </div>
  );
};

export default Homepage;
