// coap.service.ts
import { Injectable } from '@nestjs/common';
import { createServer, request } from 'coap';
import { URL } from 'url';
@Injectable()
export class CoapService {
  private server: any;

  constructor() {
    this.server = createServer();
  }

  startServer() {
    this.server.on('request', (req, res) => {
      // Tạo một đối tượng URL từ URL yêu cầu
      const requestUrl = new URL(req.url, `coap://${req.headers['Host']}`);

      // Lấy các tham số truy vấn từ URL
      const queryParams = requestUrl.searchParams;

      // In ra các tham số truy vấn
      queryParams.forEach((value, key) => {
        console.log(`Param: ${key}, Value: ${value}`);
      });

      let payload = '';
      req.on('data', (data) => {
        payload += data;
      });
      req.on('end', () => {
        // Xử lý payload tại đây
        console.log('Method:', req.method);
        console.log('Received payload:', payload);
        res.end('Response from COAP server');
      });
    });
  }
  sendRequest() {
    // Tạo một đối tượng yêu cầu CoAP với các tùy chọn cần thiết
    this.server.listen(() => {
      const req = request({
        method: 'PUT', // Phương thức yêu cầu
        hostname: 'localhost', // Tên máy chủ đích
        pathname: '/test', // Đường dẫn đích
        query: 'param1=value1&param2=value2',
        confirmable: true, // Yêu cầu xác nhận
      });

      // Đăng ký các trình nghe sự kiện cho yêu cầu
      req.on('response', (res) => {
        // Xử lý phản hồi từ máy chủ đích
        let responsePayload = '';
        res.on('data', (data) => {
          responsePayload += data;
        });
        res.on('end', () => {
          console.log('Status code:', res.code);
          console.log('Response payload:', responsePayload);
        });
      });

      req.on('error', (err) => {
        // Xử lý lỗi nếu có
        console.error('Request error:', err.message);
      });

      // Gửi yêu cầu với payload là 'Hello from CoAP client'
      req.end('{abc:"test"}');
    });
  }
}
