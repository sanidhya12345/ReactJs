import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './StateHook';
import { ChangeAnimal } from './ChangeAnimal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeAnimal></ChangeAnimal>
  </React.StrictMode>
);