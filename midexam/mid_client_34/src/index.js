import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_34 from './App_34';

import { DemoProvider_xx } from './context/DemoContext_xx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_xx>
      <App_34 />
    </DemoProvider_xx>
  </React.StrictMode>
);

