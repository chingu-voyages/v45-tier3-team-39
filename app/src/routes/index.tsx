import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
]);
