import { Server, Socket } from 'socket.io';
export declare class NotificationsGateway {
    server: Server;
    private userSocketMap;
    handleRegister(userId: number, client: Socket): Promise<void>;
    handleMarkAsRead(notificationId: number): Promise<void>;
    sendNotificationToUser(userIds: number | number[], message: string, type: string, priority: number): Promise<void>;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
