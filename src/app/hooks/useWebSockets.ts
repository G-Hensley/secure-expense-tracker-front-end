import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useWebSockets = () => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io('https://expense-tracker-pro-f2d07b08189f.herokuapp.com/');
        setSocket(newSocket);
        
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return socket;
};