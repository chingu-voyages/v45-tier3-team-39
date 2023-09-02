import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const domElement = document.getElementById('root');

if (domElement) {
  const root = createRoot(domElement);

  const App = () => (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  root.render(<App />);
}
