import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Paths } from "./paths";
import { store } from './app/store';
import './index.css';

import {Login} from "./pages/login";
import {Register} from "./pages/register";




const router = createBrowserRouter([
    {
        path: Paths.login,
        element : <Login/>
    },
    {
        path: Paths.register,
        element : <Register/>
    }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={ router } />
    </Provider>
  </React.StrictMode>
);


