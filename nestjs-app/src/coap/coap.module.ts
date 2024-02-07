// coap.module.ts
import { Module } from '@nestjs/common';
import { CoapService } from './coap.service';
import { CoapController } from './coap.controller';
@Module({
  controllers: [CoapController],
  providers: [CoapService],
})
export class CoapModule {}
