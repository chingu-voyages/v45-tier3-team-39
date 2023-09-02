import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { RecoilRoot } from 'recoil';

const domElement = document.getElementById('root');

if (domElement) {
  const root = createRoot(domElement);

  const App = () => (
    <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </React.StrictMode>
  );

  root.render(<App />);
}
