import React from 'react';
import { Dashboard }  from 'pages';
import { useSocket } from 'socket';
import './App.css';

const defaultProps = {
  className: "layout",
  items: 3,
  rowHeight: 20,
  onLayoutChange: function () { },
  cols: 12,
};


function App() {

  const socket = useSocket();

  React.useEffect(() => {
    socket?.on('connect', () => {
      console.log('connected');
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">Real-Time Configurable Dashboard</header>
      <aside className="App-aside" />
      <Dashboard {...defaultProps} />
    </div>
  );
}

export default App;
