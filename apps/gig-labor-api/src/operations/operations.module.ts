import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { BullModule } from '@nestjs/bull'
import { EmployeesModule } from './employees/employees.module';
import { ContractorsModule } from './contractors/contractors.module';

@Module({
  imports: [
    BullModule.registerQueue({
        name: 'logistics',
        redis: {
            port: 6380,
        },
    }),
    BullModule.registerQueue({
        name: 'processing',
        redis: {
            port: 6380,
        },
    }),
    BullModule.registerQueue({
        name: 'routes-pending',
        redis: {
            port: 6380
        }
    }),
    EmployeesModule,
    ContractorsModule
  ],
  controllers: [OperationsController],
  providers: [OperationsService]
})
export class OperationsModule {}
