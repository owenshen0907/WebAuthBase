// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

// 配置 Axios 使用环境变量
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true; // 允许发送跨域 Cookie

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);