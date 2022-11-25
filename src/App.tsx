import React from 'react';
import { Listings, Home, Listing, User, Host, NotFound } from './sections';
import 'antd/dist/reset.css';
import './styles/index.scss';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorText: 'var(--text-color-1)',
            colorTextTertiary: 'var(--text-color-2)',
            boxShadow: '10px 5px 5px red',
          },
        }}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/listings/:location'
              element={<Listings title='Houses' />}
            />
            <Route
              path='/host'
              element={<Host />}
            />
            <Route
              path='/listing/:id'
              element={<Listing />}
            />
            <Route
              path='/user/:id'
              element={<User />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
