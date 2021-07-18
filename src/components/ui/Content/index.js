import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import { TimerAdd, TimerList, TimerView } from '../../pages';
import './index.css';

export default function Content() {
  const { Content: ContentLayout } = Layout;

  return (
    <>
      <ContentLayout className="content">
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
