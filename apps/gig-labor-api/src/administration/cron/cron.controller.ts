import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { CronExpression } from '@nestjs/schedule';
import { CronService } from './cron.service';
import { CronJob } from 'cron';
import { ScheduleCronDto } from './dto/schedule-cron.dto';
import { UpdateCronDto } from './dto/update-schedule-cron.dto';

@Controller('cron')
export class CronController { 
    constructor(private cronService: CronService) {  }

    @Post()
    async scheduleCron(@Body() scheduleCronDto: ScheduleCronDto): Promise<CronJob> {
        return await this.cronService.scheduleCron(scheduleCronDto);
    }

    @Put(':name')
    async updateCron(
        @Param('name') name: string,
        @Body() updateCronDto: UpdateCronDto
    ): Promise<CronJob> {
        return await this.cronService.updateCron(updateCronDto);
    }

    @Get(':name')
    async fetchCron(@Param('name') name: string): Promise<CronJob> {
        return await this.cronService.getCron(name);
    }

    @Get()
    async fetchCrons(): Promise<Map<string, CronJob>> {
        return await this.cronService.getCrons();
    }

    @Delete(':name')
    async deleteCron(@Param('name') name: string): Promise<string> {
        return await this.cronService.deleteCron(name);
    }
}
