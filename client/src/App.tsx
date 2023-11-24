import React from 'react';
import { Dashboard }  from 'pages';
import { useSocket } from 'socket';
import { Header, Sidebar, Toolbar, Chat } from 'components';
import AppStyles from './App.module.css';


function App() {

  const socket = useSocket();

  React.useEffect(() => {
    socket?.on('connect', () => {
      console.log('connected');
    })
  }, []);

  return (
    <div className={AppStyles.app}>
      <Header />
      <Toolbar />
      <Sidebar />
      <Chat />
      <Dashboard />
    </div>
  );
}

export default App;
