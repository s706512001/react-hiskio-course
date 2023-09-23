import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch04/unit3';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

