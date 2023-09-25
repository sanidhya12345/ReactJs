import React from 'react';
import ReactDOM from 'react-dom/client';
//import ImageChangeState from './ImageChangeState';
import BackgroundChange from './BackgroundChange';
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
    <BackgroundChange data={data}></BackgroundChange>
  </React.StrictMode>
);
