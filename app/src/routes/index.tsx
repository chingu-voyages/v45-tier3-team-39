import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MenuPage } from 'src/pages';
import { LoadingPage } from 'src/pages/Loading';
import { KitchenOrders } from 'src/pages/Kitchen';

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
    path: '/kitchen',
    element: <KitchenOrders />,
  },
]);
