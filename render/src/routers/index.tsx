import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from '../pages/Home/index';
import Layout from '../pages/Layout/index';
import TodoList from '../pages/TodoList/index';
const Panel = React.lazy(() => import('../pages/Panel/index'));

const App = (): React.JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Home />} />
        <Route path='todos' element={<TodoList />} />
        <Route
          path='panel'
          element={
            <React.Suspense fallback={<>...</>}>
              <Panel />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
