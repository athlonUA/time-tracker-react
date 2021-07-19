import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function Header() {
  const location = useLocation();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  const menuItems = [
    {
      title: 'Timer',
      link: '/',
    },
    {
      title: 'List of tracked timers',
      link: '/list',
    },
  ];

  const { Header: HeaderLayout } = Layout;

  return (
    <>
      <HeaderLayout className={styles.header}>
        <Menu mode="horizontal" selectedKeys={[selectedItem]}>
          {menuItems.map(item => (
            <Menu.Item key={item.link}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </HeaderLayout>
    </>
  );
}
