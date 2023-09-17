import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MenuPage } from '~src/pages';
import { LoadingPage } from '~src/pages';
import { KitchenPage } from '~src/pages';
import { OrderPage } from '~src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoadingPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/order',
    element: <OrderPage />,
  },
  {
    path: '/kitchen',
    element: <KitchenPage />,
  },
]);
