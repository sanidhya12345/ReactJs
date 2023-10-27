import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './StateHook';
import { ChangeAnimal } from './ChangeAnimal';
import { SimpleCalculator } from './SimpleCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleCalculator></SimpleCalculator>
  </React.StrictMode>
);