import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './index.css';

export default function Header() {
  const menuItems = [
    {
      title: 'Tracker',
      link: '/',
    },
    {
      title: 'List of tracked items',
      link: '/list',
    },
  ];
  const { Header: HeaderLayout } = Layout;

  return (
    <>
      <HeaderLayout className="header">
        <Menu mode="horizontal" defaultSelectedKeys="0">
          {menuItems.map((item, idx) => (
            <Menu.Item key={idx}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </HeaderLayout>
    </>
  );
}
