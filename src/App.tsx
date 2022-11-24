import React from 'react';
import Listings from './sections/Listings';
import 'antd/dist/reset.css';
import './styles/index.scss';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorText: 'var(--text-color-1)',
            colorTextTertiary: 'var(--text-color-2)',
            boxShadow: '10px 5px 5px red', //'var(--shadow-1)',
          },
        }}>
        <Listings title='Houses list' />
      </ConfigProvider>
    </>
  );
}

export default App;
