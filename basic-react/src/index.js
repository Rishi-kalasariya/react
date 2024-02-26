import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Phone from './Phone'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <> 
  {/* need to return everything in one element only */}
    <App />
    <Phone/>
  </>
);
