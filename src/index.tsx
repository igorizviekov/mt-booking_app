import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
