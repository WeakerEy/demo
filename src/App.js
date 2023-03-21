/*
 * @Author: WeakerEy 280676418@qq.com
 * @Date: 2023-03-21 21:41:18
 * @LastEditors: WeakerEy 280676418@qq.com
 * @LastEditTime: 2023-03-21 22:52:06
 * @FilePath: \my-moni\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import './App.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Manufacturer from './Manufacturer';
import Time from './Time';
import { Routes, Route, useNavigate } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let navigator = useNavigate()

  const items = [
    {
      label: '厂商管理',
      key: 'manu',
      icon: <MailOutlined />,
    },
    {
      label: '时间序列',
      key: 'time',
      icon: <MailOutlined />,
    },
  ];

  function onClick(e) {
    navigator(e.key, { replace: true })
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          onClick={onClick}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/manu" element={<Manufacturer />} />,
            <Route path="/time" element={<Time />} />,
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
