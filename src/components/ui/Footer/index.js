import { Layout } from 'antd';

import './index.css';

export default function Footer() {
  const { Footer: FooterLayout } = Layout;

  return (
    <>
      <FooterLayout className="footer">
        Time tracker ©2021 Created by{' '}
        <a href="https://github.com/athlonUA">athlon_ua</a>
      </FooterLayout>
    </>
  );
}
