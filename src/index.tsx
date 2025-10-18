import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 全局样式
import App from './App';

// 找到 public/index.html 中的 root 元素
const rootElement = document.getElementById('root');

// 确保 rootElement 存在，然后创建 React root 并渲染 App 组件
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}