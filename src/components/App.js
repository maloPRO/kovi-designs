import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './home';
import Sofas from './sofas';
import Beds from  './beds';
import Tables from './tables';
import Cart from './cart';


function App() {
  const router =   createBrowserRouter([
    {
      path: `${process.env.PUBLIC_URL}/`,
      element: <Home/>
    },
    {
      path: `${process.env.PUBLIC_URL}/beds`,
      element: <Beds />
    },
    {
      path: `${process.env.PUBLIC_URL}/sofas`,
      element: <Sofas />
    },
    {
      path: `${process.env.PUBLIC_URL}/tables`,
      element: <Tables />
    },
    {
      path: `${process.env.PUBLIC_URL}/cart`,
      element: <Cart />
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
