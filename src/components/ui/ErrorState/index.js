import { Result } from 'antd';

// eslint-disable-next-line
import styles from './index.module.css';

export default function ErrorState() {
  return (
    <div className={styles.wrapper}>
      <Result status="500" subTitle="Sorry, something went wrong." />,
    </div>
  );
}
