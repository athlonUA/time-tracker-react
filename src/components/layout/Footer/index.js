import { Layout } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function Footer() {
  const { Footer: FooterLayout } = Layout;

  return (
    <>
      <FooterLayout className={styles.footer}>
        Time tracker ©2021 Created by{' '}
        <a href="https://github.com/athlonUA">athlon_ua</a>
      </FooterLayout>
    </>
  );
}
