import React, { FC, useState, useEffect } from 'react';
import { Table } from 'antd';
import './index.less';

const TodoList: FC = () => {
  const pageSize = 10;
  const [query, setQuery] = useState<string>('');
  const [taskList, setTaskList] = useState<Array<DataType>>([
    {
      key: '1',
      name: '胡彦斌',
    },
    {
      key: '2',
      name: '胡彦祖',
    },
  ]);
  const [current, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(15);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const onCurrentPageChange = (page: number) => {};

  const getTaskList = async () => {
    return [];
  };

  useEffect(() => {}, [current]);

  return (
    <div className="todo-list-wrap">
      <div className="title">待办列表</div>

      <div className="table-wrap">
        <Table
          dataSource={taskList}
          columns={columns}
          pagination={{
            position: ['bottomRight'],
            current,
            pageSize,
            showTitle: true,
            total,
            hideOnSinglePage: true,
            onChange: onCurrentPageChange,
          }}
        />
      </div>
    </div>
  );
};

export default TodoList;
