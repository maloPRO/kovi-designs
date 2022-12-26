import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './home';
import Sofas from './sofas';
import Beds from  './beds';
import Tables from './tables';

function App() {
  const router =   createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/beds',
      element: <Beds />
    },
    {
      path: '/sofas',
      element: <Sofas />
    },
    {
      path: '/tables',
      element: <Tables />
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
