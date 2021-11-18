import { Test } from '@nestjs/testing';
import { CronService } from '../../../../src/administration/cron/cron/cron.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';


describe('test CronService', () => {
    let cronService: CronService;

    class SchedulerRegistryMock {
        // todo: to mock functions
    }
    class HttpServiceMock {
        // todo: to mock functions
    }

    beforeEach(async () => {
        const SchedulerRegistryProvider = {
            provide: SchedulerRegistry,
            useClass: SchedulerRegistryMock
        };
        const HttpServiceProvider = {
            provide: HttpService,
            useClass: HttpServiceMock
        };

        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [CronService, SchedulerRegistryProvider, HttpServiceProvider],
        }).compile();
        cronService = moduleRef.get<CronService>(CronService);

    });

    test('CronService business', async () => {
        // todo mock && call && assert

    });
    
});
