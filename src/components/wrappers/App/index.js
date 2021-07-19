import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import { Header, Footer, Content } from '../../layout';
import './index.module.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </Router>
  );
}
