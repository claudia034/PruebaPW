import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';

import { ConfigProvider } from './contexts/ConfigContext';

import App from './App';

import './index.css';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "http://localhost:3000/API";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
          <UserContextProvider>
            <App />
            <ToastContainer theme='dark' position='bottom-right' />
          </UserContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
