import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Constructor from './Constructor';
import GetDrivedStateFromProps from './GetDerivedStateFromProps';
import ComponentDidMount from './ComponentDidMount';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentDidMount></ComponentDidMount>
  </React.StrictMode>
);
