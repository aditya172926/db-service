import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI), TransactionsModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'EVENT_SERVICE',
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3000,
        }
      })
    }
  }, TransactionsService],
})
export class AppModule {}
