import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './LayoutComponent.css';

const LayoutComponent = () => {
  const copyCodeToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Code "${code}" copied to clipboard!`);
  };

  return (
    <div className="layout-container">
      <Sidebar copyCodeToClipboard={copyCodeToClipboard} />
      <MainContent />
    </div>
  );
};

export default LayoutComponent;
