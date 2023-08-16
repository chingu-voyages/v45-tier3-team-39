import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>Hello World</h1>;
};

const domElement = document.getElementById('root');
if (domElement) {
  const root = createRoot(domElement);
  root.render(<App />);
}
