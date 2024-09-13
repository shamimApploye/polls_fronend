import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, ReactReduxContext } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} context={ReactReduxContext}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
