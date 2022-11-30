import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import './styles/index.scss';
import { store } from './store/index';
import { StoreProvider } from 'easy-peasy';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
);
