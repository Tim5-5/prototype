// App.js
import React from 'react';
import Header from './Header';
import LayoutComponent from './LayoutComponent'; // Import LayoutComponent

const App = () => {
  return (
    <div>
      <Header />
      <LayoutComponent />
      {/* andere content */}
    </div>
  );
};

export default App;
