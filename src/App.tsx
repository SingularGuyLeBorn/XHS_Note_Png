import React from 'react';
import Navbar from './Navbar';
import HomePage, { Paper } from './HomePage'; // 导入 HomePage 组件和 Paper 类型
import './App.css'; // 全局样式

function App() {
  // 更新数据，移除 authors 字段
  const papersData: Paper[] = [
    {
      date: '2025-10-04',
      title: 'TIR VS FC',
      coreIdea: 'TIR为什么能拓宽LLM的能力边界',
      path: '/notes/2025-10-04 TIR VS FC/index.html'
    },
    {
      date: '2025-10-08',
      title: '线性注意力机制',
      coreIdea: '提出了一种新的注意力机制，旨在将 Transformer 的计算复杂度从 O(n²) 降低到线性级别。',
      path: '/notes/2025-10-08 对抗Transfrmer的平方复杂度/index.html'
    },
    {
      date: '2025-10-17',
      title: '噪声提高LLM推理多样性',
      coreIdea: '通过在推理过程中引入可控噪声，可以显著提升大型语言模型生成内容的多样性和创造性。',
      path: '/notes/2025-10-17 噪声提高LLM推理多样性/index.html'
    },
    {
      date: '2025-10-18',
      title: 'RL如何促进LLM学习',
      coreIdea: '将RL应用于大型语言模型的微调，可以使其更好地与人类偏好对齐。',
      path: '/notes/2025-10-18RL如何促进LLM学习/index.html'
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <HomePage papers={papersData} />
    </div>
  );
}

export default App;