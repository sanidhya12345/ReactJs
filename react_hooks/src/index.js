import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './StateHook';
import { ChangeAnimal } from './ChangeAnimal';
import { SimpleCalculator } from './SimpleCalculator';
import { UseState } from './UseState';
import { UseEffect } from './UseEffect';
import { FormUsingHooks } from './forms/FormUsingHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <FormUsingHooks></FormUsingHooks>
  </React.StrictMode>
);