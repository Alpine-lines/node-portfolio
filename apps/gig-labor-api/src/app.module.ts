import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from './http-config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AdministrationModule } from './administration/administration.module';
import { OperationsModule } from './operations/operations.module';
import { CustomersModule } from './customers/customers.module';
@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6378,
      },
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    AdministrationModule,
    CustomersModule,
    OperationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
