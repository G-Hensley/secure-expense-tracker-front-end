import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useWebSockets = () => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io('http://localhost:5700');
        setSocket(newSocket);
        
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return socket;
};