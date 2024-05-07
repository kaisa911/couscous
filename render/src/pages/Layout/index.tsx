import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { DesktopOutlined, FileOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import './index.less';

interface LayoutProps {}

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
export interface ClickParam {
  key: string;
  keyPath: Array<string>;
  item: any;
  domEvent: Event;
}

const items: MenuItem[] = [
  getItem('待办', '/todos', <PieChartOutlined />),
  getItem('Option 2', '/panel', <DesktopOutlined />),
  getItem('Files', '/', <FileOutlined />),
];

const LayoutComponent: React.FC<LayoutProps> = () => {
  const [collapsed, setCollapsed] = useState(true);

  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };
  const onMenuClick: MenuProps['onClick'] = (event) => {
    const { key } = event;
    navigate(key);
  };

  return (
    <div className='layout-wrap'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className='demo-logo-vertical' onClick={backToHome} />
          <Menu
            theme='dark'
            defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
            onClick={onMenuClick}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: '0' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutComponent;
