import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import { TimerAdd, TimerList, TimerView } from '../../pages';

// eslint-disable-next-line
import styles from './index.module.css';

export default function Content() {
  const { Content: ContentLayout } = Layout;

  return (
    <>
      <ContentLayout className={styles.content}>
        <Switch>
          <Route exact path="/" component={TimerAdd} />
          <Route exact path="/list" component={TimerList} />
          <Route exact path="/view/:id" component={TimerView} />
          <Redirect to="/" />
        </Switch>
      </ContentLayout>
    </>
  );
}
