import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import { Header, Footer, Content } from '../../ui';
import './index.css';

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Router>
  );
}
