import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useWebSockets = () => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_API_URL || '');
        setSocket(newSocket);
        
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return socket;
};