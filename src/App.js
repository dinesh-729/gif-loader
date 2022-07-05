import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Layout from './components/Layout';
const Home = React.lazy(() => import('./pages/home'));
const Search = React.lazy(() => import('./pages/Search'));
const Error404 = React.lazy(() => import('./pages/error/404'));

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/search" element={<Search/>} exact />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
