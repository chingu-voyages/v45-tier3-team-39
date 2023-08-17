import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <h1 className="text-2xl font-bold underline text-blue-500">Hello world!</h1>
  );
};

const domElement = document.getElementById('root');
if (domElement) {
  const root = createRoot(domElement);
  root.render(<App />);
}
