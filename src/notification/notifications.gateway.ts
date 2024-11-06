import { PrismaClient } from '@prisma/client';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const prisma = new PrismaClient();

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  private userSocketMap = new Map<number, string>(); // Mapa para almacenar la relación entre el ID del usuario y el ID del socket

  @SubscribeMessage('register')
  async handleRegister(
    @MessageBody() userId: number,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    this.userSocketMap.set(userId, client.id); // Almacenar la relación

    // Enviar notificaciones no vistas desde la base de datos
    const notifications = await prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: [
         {
      isRead: 'asc', // Primero ordenar por no leídas
    },
    {
      createdAt: 'desc', // Luego ordenar por fecha de creación
    },
      ]
    });
    notifications.forEach((notification) => {
      this.server.to(client.id).emit('receiveNotification', notification);
    });
  }

  @SubscribeMessage('markAsRead')
  async handleMarkAsRead(@MessageBody() notificationId: number): Promise<void> {
    console.log('Marking notification as read:', notificationId);
    await prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });
  }

  async sendNotificationToUser(
    userIds: number | number[],
    message: string,
    type: string,
    priority: number,
  ): Promise<void> {
    const userIdArray = Array.isArray(userIds) ? userIds : [userIds];
  
    for (const userId of userIdArray) {
      const socketId = this.userSocketMap.get(userId);
      const notification = await prisma.notification.create({
        data: {
          userId,
          message,
          type,
          priority,
        },
      });
  
      if (socketId) {
        this.server.to(socketId).emit('receiveNotification', notification);
      }
    }
  }

  handleConnection(client: Socket): void {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    console.log(`Client disconnected: ${client.id}`);
    // Eliminar la relación cuando el cliente se desconecta
    for (const [userId, socketId] of this.userSocketMap.entries()) {
      if (socketId === client.id) {
        this.userSocketMap.delete(userId);
        break;
      }
    }
  }
}
