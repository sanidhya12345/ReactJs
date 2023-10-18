import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Validation from './Validation';
import UncontrolledComponents from './UncontrolledComponents';
import CheckBox from './CheckBox';
import BioData from './BioData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BioData></BioData>
  </React.StrictMode>
);

