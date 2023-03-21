import { Space, Table, Button ,Modal } from 'antd';
import { getManu } from '../api/api';
import { useState } from 'react';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function Manufacturer() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  async function onClick(){
    let res = await getManu()
    console.log(res)
  }

  function handleCancel(){
    setIsModalOpen(false)
  }

  function subManu(){
    setIsModalOpen(true)
  }


  const columns = [
    {
      title: '编号',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '厂商',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={onClick}>操作</a>
        </Space>
      ),
    },
  ];


  return (
    <div>
      <Button onClick={subManu}>添加</Button>
      <Table columns={columns} dataSource={data} />
      <Modal title="添加厂商" open={isModalOpen} onCancel={handleCancel} footer={null}>

      </Modal>
    </div>
  )
}
