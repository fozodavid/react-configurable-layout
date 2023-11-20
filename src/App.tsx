import React from 'react';
import './App.css';
import Basic from './Basic';

const defaultProps = {
  className: "layout",
  items: 3,
  rowHeight: 20,
  onLayoutChange: function () { },
  cols: 12
};


function App() {
  return (
    <div className="App">
      <Basic {...defaultProps} />
    </div>
  );
}

export default App;
