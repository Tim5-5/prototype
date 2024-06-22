import React from 'react';
import './LayoutComponent.css';

const Sidebar = ({ copyCodeToClipboard }) => {
  return (
    <div style={{ position: 'sticky', top: '20px' }} className="sidebar">
      <div className="sidebar-title">
        <p>Refer a Business & Earn 100 Points</p>
      </div>
      <div className="sidebar-description">
        <p>Tell a friend to show your code when opening a case with Bierens:</p>
        <div className="referral-code">
          <p className="code-info">
            LW9M
            <button className="copy-icon" onClick={() => copyCodeToClipboard('LW9M')}>
              <img src="https://cdn-icons-png.flaticon.com/512/12204/12204456.png" alt="Copy icon" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
