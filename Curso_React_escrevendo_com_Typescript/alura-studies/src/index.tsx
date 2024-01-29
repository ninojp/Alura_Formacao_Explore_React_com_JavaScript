import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import AppAluraStudies from './pages/AppAluraStudies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppAluraStudies />
  </React.StrictMode>
);

