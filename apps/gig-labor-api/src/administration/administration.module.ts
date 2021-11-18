import { Module } from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { AdministrationController } from './administration.controller';
import { BullModule } from '@nestjs/bull'
import { BlueprintsModule } from './blueprints/blueprints.module';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'adminstrative',
      redis: {
        port: 6380,
      },
    }),
    BlueprintsModule,
    CronModule
  ],
  controllers: [AdministrationController],
  providers: [AdministrationService]
})
export class AdministrationModule {}
