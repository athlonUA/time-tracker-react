import { Empty } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <Empty />
    </div>
  );
}
