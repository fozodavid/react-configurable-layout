import React from 'react'
import { io, Socket } from 'socket.io-client';

const URL = process.env.NODE_ENV !== 'development' ? process.env.REACT_APP_SOCKET_IO_SERVER : 'http://localhost:8080';
const socketConfig =  process.env.NODE_ENV !== 'development' ? {
    path: process.env.REACT_APP_SOCKET_IO_PATH,
    autoConnect: true,
} : {}

export const useSocket = () => {
    const [socket, setSocket] = React.useState<Socket>();

    React.useEffect(() => {
        if (!URL) {
            throw new Error('REACT_APP_SOCKET_IO_SERVER is not defined');
        }
        const socket: Socket = io(URL, socketConfig);

        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    return socket;
};