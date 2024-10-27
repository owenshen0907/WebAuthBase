// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// 配置 Axios
axios.defaults.baseURL = 'http://localhost:5050'; // 或使用环境变量
axios.defaults.withCredentials = true; // 允许发送跨域 Cookie

ReactDOM.render(<App />, document.getElementById('root'));