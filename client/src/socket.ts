import React from 'react'
import { io, Socket } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:8080';

export const useSocket = () => {
    const [socket, setSocket] = React.useState<Socket>();

    React.useEffect(() => {
        const socket: Socket = io(URL || '');
        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    return socket;
};