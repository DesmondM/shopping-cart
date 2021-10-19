import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import ProductsContext from './context/ProductsContext';

ReactDOM.render(
  <BrowserRouter>
  <ProductsContext>
    <App />
    </ProductsContext>
  </BrowserRouter>,
  document.getElementById('root')
);
