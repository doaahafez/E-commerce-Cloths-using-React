import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductContextProvider } from './components/contexts/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <BrowserRouter>
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
  </BrowserRouter>
);
