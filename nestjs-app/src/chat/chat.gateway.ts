/* eslint-disable @typescript-eslint/no-unused-vars */
import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway(3006, { cors: true })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ChatGateway.name);
  @WebSocketServer() io: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    const { sockets } = this.io.sockets;
    console.log(client.handshake.auth);
    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Cliend id:${client.id} disconnected`);
  }

  @SubscribeMessage('ping')
  handleMessage(client: any, data: any) {
    let count = 0;
    this.logger.log(`Message received from client id: ${client.id}`);
    this.logger.debug(`Payload: ${data}`);
    const intervalId = setInterval(() => {
      this.sendMessageToClient(client.id, Math.random());
      count++;
      if (count === 10) {
        clearInterval(intervalId);
      }
    }, 2000);

    return {
      event: 'pong',
      data,
    };
  }
  // Method to send message to a client
  sendMessageToClient(clientId: string, message: any) {
    const clientSocket = this.io.sockets.sockets.get(clientId);
    if (clientSocket) {
      clientSocket.emit('message-received', message);
      // You can also use clientSocket.send(message); if it suits your use case better
      this.logger.log(`Message sent to client ${clientId}`);
    } else {
      this.logger.error(`Client ${clientId} not found`);
    }
  }
}
