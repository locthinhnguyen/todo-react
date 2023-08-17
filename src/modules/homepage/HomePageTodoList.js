import { Pagination, Table } from 'antd';
import React from 'react';

export const HomePageTodoList = ({
  showDetail,
  todos,
  total,
  pageSize,
  page,
  handlePageChange,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Point',
      dataIndex: 'point',
    },
  ];

  return (
    <div>
      <Table
        className="w-full"
        onRow={(record) => {
          return {
            onClick: () => {
              showDetail(record);
              // console.log('record: ', record);
            },
          };
        }}
        columns={columns}
        dataSource={todos}
        rowKey="_id"
      />
      <Pagination
        total={total}
        current={page}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
};
