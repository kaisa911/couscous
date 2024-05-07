import React, { Suspense, lazy, FC } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from '../pages/Home/index';
import Layout from '../pages/Layout/index';
import TodoList from '../pages/TodoList/index';
const Panel = lazy(() => import('../pages/Panel/index'));

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home />} />
        <Route path='/todos' element={<TodoList />} />
        <Route
          path='/panel'
          element={
            <Suspense fallback={<></>}>
              <Panel />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
