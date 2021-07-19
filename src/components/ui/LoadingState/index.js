import { Spin } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function LoadingState() {
  return (
    <div className={styles.wrapper}>
      <Spin tip="Loading..." />
    </div>
  );
}
