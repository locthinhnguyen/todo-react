import React, { useEffect, useState } from 'react';
import { todoApi } from '../apis/todo';
import { Pagination, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomePageServices, HomePageTodoList } from '../modules';

const Homepage = () => {
  const [todo, setTodo] = useState([]);
  const [total, setTotal] = useState();
  console.log('total: ', total);

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();

  const addTodo = () => {
    navigate(`/create`);
  };
  // const todolist = {
  //   name: '',
  //   description: '',
  //   point: '',
  // };
  const showDetail = (item) => {
    navigate(`/tododetail/${item._id} `);
  };
  // truyen data bang useNavigate and use Location
  // du lieu khoi tao load truoc => ui =>
  // console.log('todo: ', todo);
  // bien dong thi tao state de luu tru
  // Protected routes
  useEffect(() => {
    console.log('so lan duoc goi');
    const getMyTodos = async (page, limit = pageSize) => {
      console.log('so lan duoc goi gettodo');
      try {
        const res = await todoApi.mytodos(page, limit);
        setTodo(res.data);
        setTotal(res.totals);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    getMyTodos(page);
  }, [page, pageSize]);

  const onchangethinh = (page, pageSize) => {
    setPage(page);
  };

  return (
    <div className=" flex justify-center flex-col items-center">
      <h1 className=" font-bold text-[30px]">List Todo</h1>
      <HomePageServices />
      <HomePageTodoList
        pageSize={pageSize}
        todos={todo}
        page={page}
        handlePageChange={onchangethinh}
        showDetail={showDetail}
        total={total}
      />
      <button className=" hover:bg-blue-400" onClick={addTodo}>
        + New
      </button>
    </div>
  );
};

export default Homepage;
