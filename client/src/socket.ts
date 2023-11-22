import React from 'react'
import { io, Socket } from 'socket.io-client';

const URL = process.env.REACT_APP_SOCKET_IO_SERVER || 'http://localhost:8080';

export const useSocket = () => {
    const [socket, setSocket] = React.useState<Socket>();

    React.useEffect(() => {
        const socket: Socket = io(URL || '',
            {
                path: process.env.REACT_APP_SOCKET_IO_PATH || '',
                autoConnect: true,
            }
        );

        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    return socket;
};