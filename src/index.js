import React from "react";
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import './styles/index.css';
import Beds from "./components/beds";
import Sofas from "./components/sofas";
import Dining from "./components/dining";
import Tables from "./components/tables";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App/>
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
    path: '/dining',
    element: <Dining />
  },
  {
    path: '/tables',
    element: <Tables />
  }
])


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
  document.getElementById('root')
);