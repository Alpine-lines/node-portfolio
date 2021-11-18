import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { AvailabiltyRequestBody } from './dto/availability-request-body.query';
import { EmployeeAvailabiltyRequestBody } from './dto/employee-availability-request-body.query';
import { UpdateDailyScheduleDto } from './dto/update-daily-schedule.dto';
import { CreateEmployeeAvailabilityDto } from './dto/create-employee-availabilty.dto';
import { UpdateEmployeeAvailabilityDto } from './dto/employee-availabilty.dto';
import { EmployeeScheduleRequestBody } from './dto/employee-schedule-request-body.query';
import { ScheduleRequestBody } from './dto/schedule-request-body.query';
import { OperationsService } from './operations.service';
import { Schedule } from './types/employee-schedule.type';

@Controller('operations')
export class OperationsController {
  constructor(
    private readonly operationsService: OperationsService,
  ) { }

  @Post('availability/:employeeId')
  async submitEmployeeAvailability(
    @Param('employeeId') employeeId: string,
    @Body() createEmployeeAvailabilityDto: CreateEmployeeAvailabilityDto
  ): Promise<string> {
    return await this.operationsService.submitEmployeeAvailability(employeeId, createEmployeeAvailabilityDto)
  }

  @Put('availability/:employeeId/:availabilityId')
  async updateEmployeeAvailability(
    @Param('employeeId') employeeId: string,
    @Param('availabilityId') availabilityId: string,
    @Body() updateEmployeeAvailabilityDto: UpdateEmployeeAvailabilityDto
  ): Promise<string> {
    return await this.operationsService.updateEmployeeAvailability(employeeId, availabilityId, updateEmployeeAvailabilityDto)
  }

  @Put('schedule/:employeeId/:date')
  async updateDailySchedule(
    @Param('employeeId') employeeId: string,
    @Param('date') date: Date,
    @Body() updateDailyScheduleDto: UpdateDailyScheduleDto,
  ) {
    return await this.operationsService.updateDailySchedule(employeeId, date, updateDailyScheduleDto)
  }

  @Get('availability')
  async fetchAvailabilty(@Body() reqBody: AvailabiltyRequestBody): Promise<Availability | Availability[]> {
    return await this.operationsService.fetchAvailability(reqBody)
  }

  @Get('availability/:employeeId')
  async fetchEmployeeAvailabilty(
    @Param('employeeId') employeeId: string, 
    @Body() reqBody: EmployeeAvailabiltyRequestBody
  ): Promise<Availability | Availability[]> {
    return await this.operationsService.fetchEmployeeAvailability(employeeId, reqBody)
  }

  @Get('schedule')
  async fetchSchedule(@Body() reqBody: ScheduleRequestBody): Promise<Schedule | Schedule[]> {
    return await this.operationsService.fetchSchedule(reqBody)
  }

  @Get('schedule/:employeeId')
  async fetchEmployeeSchedule(
    @Param('employeeId') employeeId: string,
    @Body() reqBody: EmployeeScheduleRequestBody
  ): Promise<Schedule | Schedule[]> {
    return this.operationsService.fetchEmployeeSchedule(employeeId, reqBody)
  }

  @Delete('availability/:employeeId/:availabilityId')
  async deleteEmployeeAvailability(
    @Param('employeeId') employeeId: string,
    @Param('availability') availabilityId: string
  ): Promise<string> {
    return this.operationsService.deleteEmployeeAvailability(employeeId, availabilityId);
  }
}
