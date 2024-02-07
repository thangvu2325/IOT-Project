import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';
import { MailModule } from './mail/mail.module';
import { CustomersEntity } from './customers/customers.entity';
import { NotifiesEntity } from './notifies/notifies.entity';
import { CoapModule } from './coap/coap.module';
import { ChatGateway } from './chat/chat.gateway';
import { CustomersModule } from './customers/customers.module';
import { DevicesEntity } from './devices/devices.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQLDB_HOST'),
        port: configService.get('MYSQLDB_LOCAL_PORT'),
        username: configService.get('MYSQLDB_USER'),
        password: configService.get('MYSQLDB_PASSWORD'),
        database: configService.get('MYSQLDB_DATABASE'),
        entities: [UserEntity, CustomersEntity, DevicesEntity, NotifiesEntity],
        synchronize: true,
      }),
    }),
    CustomersModule,
    UsersModule,
    AuthModule,
    RedisModule,
    MailModule,
    CoapModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'App_User',
      useClass: AppService,
    },
    ChatGateway,
  ],
})
export class AppModule {}
