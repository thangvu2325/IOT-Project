/* eslint-disable @typescript-eslint/no-explicit-any */
import { io, Socket } from "socket.io-client";
import { config } from "../config";
import { ClientToServerEvents, ServerToClientEvents } from "@/type";

class SocketService {
  private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(config.socketUrl, {
      autoConnect: false,
    });

  connectWithAuthToken(
    token: string,
    customer_id: string,
    headers: Record<string, string>
  ) {
    if (headers && this.socket?.io?.opts?.extraHeaders) {
      Object.keys(headers).forEach((key) => {
        if (this.socket.io.opts.extraHeaders) {
          this.socket.io.opts.extraHeaders[key] = headers[key];
        }
      });
    }

    // Thiết lập thông tin xác thực
    this.socket.auth = { token, customer_id };

    // Kết nối với máy chủ WebSocket
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(data: any) {
    this.socket.emit("message", data);
  }

  subscribeToMessages(messageHandler: ServerToClientEvents["message"]) {
    this.socket.on("message", messageHandler);
  }
}

export const socketService = new SocketService();
