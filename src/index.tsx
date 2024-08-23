import React from 'react';
import ReactDOM from 'react-dom/client';
import WebRouter from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WebRouter/>
  </React.StrictMode>
);


