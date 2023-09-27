import React from 'react';
import ReactDOM from 'react-dom/client';
//import ImageChangeState from './ImageChangeState';
import BackgroundChange from './BackgroundChange';
import CountrySelector from './CountrySelector';
//import App from './App'
//import HexcolorGenerator from './HexColorGenerator';
const root = ReactDOM.createRoot(document.getElementById('root'));
const data={
   welcome:'Welcome to 30 Days of React',
   title:'Getting Started React',
   subtitle:'Javascript Library',
   firstName:'Sanidhya',
   lastName:'Varshney',
   date:'Sep 25,2023'
}
root.render(
  <React.StrictMode>
    <CountrySelector></CountrySelector>
  </React.StrictMode>
);
