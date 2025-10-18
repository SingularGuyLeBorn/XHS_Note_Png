import React from 'react';
import './HomePage.css';

// 更新 Paper 类型接口，移除 authors 属性
export interface Paper {
  date: string;
  title: string;
  coreIdea: string;
  path: string;
}

interface HomePageProps {
  papers: Paper[];
}

function HomePage({ papers }: HomePageProps) {
  return (
    <main className="homepage-main">
      <div className="paper-grid">
        {papers.map((paper, index) => (
          <div key={index} className="paper-card">
            <div className="card-header">
              <span className="paper-date">{paper.date}</span>
            </div>
            <h2 className="paper-title">{paper.title}</h2>
            {/* 下面这行显示作者的代码已被移除 */}
            <p className="paper-core-idea">
              <strong>核心观点:</strong> {paper.coreIdea}
            </p>
            <a href={paper.path} target="_blank" rel="noopener noreferrer" className="read-more-link">
              阅读全文 &rarr;
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;