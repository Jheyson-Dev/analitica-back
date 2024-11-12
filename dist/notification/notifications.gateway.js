"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsGateway = void 0;
const client_1 = require("@prisma/client");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const prisma = new client_1.PrismaClient();
let NotificationsGateway = class NotificationsGateway {
    constructor() {
        this.userSocketMap = new Map();
    }
    async handleRegister(userId, client) {
        this.userSocketMap.set(userId, client.id);
        const notifications = await prisma.notification.findMany({
            where: {
                userId,
            },
            orderBy: [
                {
                    isRead: 'asc',
                },
                {
                    createdAt: 'desc',
                },
            ]
        });
        notifications.forEach((notification) => {
            this.server.to(client.id).emit('receiveNotification', notification);
        });
    }
    async handleMarkAsRead(notificationId) {
        console.log('Marking notification as read:', notificationId);
        await prisma.notification.update({
            where: { id: notificationId },
            data: { isRead: true },
        });
    }
    async sendNotificationToUser(userIds, message, type, priority) {
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
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        for (const [userId, socketId] of this.userSocketMap.entries()) {
            if (socketId === client.id) {
                this.userSocketMap.delete(userId);
                break;
            }
        }
    }
};
exports.NotificationsGateway = NotificationsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], NotificationsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('register'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], NotificationsGateway.prototype, "handleRegister", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('markAsRead'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationsGateway.prototype, "handleMarkAsRead", null);
exports.NotificationsGateway = NotificationsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], NotificationsGateway);
//# sourceMappingURL=notifications.gateway.js.map