import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'

import App from './App';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ru_RU}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

