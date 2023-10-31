import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'

//redux and redux-toolkit
import {Provider} from 'react-redux';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import { store } from './app/store'
import { apiSlice } from './features/api/apiSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
