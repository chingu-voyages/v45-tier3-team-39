import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MenuPage, LandingPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
]);
