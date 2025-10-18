import React from 'react';
import './Navbar.css'; // 我们将为导航栏创建专门的样式文件

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        DailyPaper
      </div>
      <div className="navbar-author">
        by 荒原猎码人Zero
      </div>
    </nav>
  );
}

export default Navbar;