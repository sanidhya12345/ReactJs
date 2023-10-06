import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Constructor from './Constructor';
import GetDrivedStateFromProps from './GetDerivedStateFromProps';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GetDrivedStateFromProps/>
  </React.StrictMode>
);
