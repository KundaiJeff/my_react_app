
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);