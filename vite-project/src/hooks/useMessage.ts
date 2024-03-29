import { socketService } from "@/services/socketService";

const messageConnection = (token: string, customer_id: string) => {
  // Cấu hình các tiêu đề yêu cầu ở đây trước khi kết nối
  const headers = {
    // Authorization: `Bearer ${token}`,
    CustomerId: customer_id,
    "Access-Control-Allow-Origin": "*",
    // Thêm các tiêu đề khác nếu cần thiết
  };
  socketService.connectWithAuthToken(token, customer_id, headers);
};
const messageReiceved = () => {
  socketService.subscribeToMessages((message) => {
    console.log("New message received:", message);
    return message;
  });
};
const messageSent = () => {
  const messageData = { text: "Hello, world!" };
  socketService.sendMessage(messageData);
};
const messageDisconnect = () => {
  socketService.disconnect();
};
const useMessage = () => ({
  messageConnection,
  messageReiceved,
  messageDisconnect,
  messageSent,
});
export default useMessage;
