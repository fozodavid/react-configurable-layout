import React from 'react';
import './App.css';
import Basic from './pages/Basic';

const defaultProps = {
  className: "layout",
  items: 3,
  rowHeight: 20,
  onLayoutChange: function () { },
  cols: 12,
};


function App() {
  return (
    <div className="App">
      <header className="App-header">Real-Time Configurable Dashboard</header>
      <aside className="App-aside" />
      <Basic {...defaultProps} />
    </div>
  );
}

export default App;
