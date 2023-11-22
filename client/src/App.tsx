import React from 'react';
import { Dashboard }  from 'pages';
import { useSocket } from 'socket';
import { Header, Sidebar, Toolbar, Chat } from 'components';
import './App.css';

const defaultProps = {
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
      <Header />
      <Toolbar />
      <Sidebar />
      <Chat />
      <Dashboard {...defaultProps} />
    </div>
  );
}

export default App;
