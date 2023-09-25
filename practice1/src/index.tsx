import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './ch03/unit4/App';
// import App from './ch03/unit5/App';
// import App from './ch03/unit6/App';
// import Main from './ch04/unit1'
import Main from './ch04/unit2'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);