import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
     welcome="30 Days of React"
     title="Getting Started React"
     subtitle="Javascript Library"
     firstName="Sanidhya"
     lastName="Varshney"
     date='September 20,2023'
    />
  </React.StrictMode>
);

