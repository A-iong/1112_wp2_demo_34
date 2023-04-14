import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_34 from './App_34';

// import { DemoProvider_34 } from './context/DemoContext_34';
// import { ServerProvider_34 } from './context/ServerContext_34';
import { SupabaseProvider_34 } from './context/SupabaseContext_34';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SupabaseProvider_34>
      <App_34 />
    </SupabaseProvider_34>
  </React.StrictMode>
);

