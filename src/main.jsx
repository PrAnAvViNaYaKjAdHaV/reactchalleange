/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth.context.jsx';
import { ProductContexttProvider } from './store/product.context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContexttProvider>
          <App />
        </ProductContexttProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
