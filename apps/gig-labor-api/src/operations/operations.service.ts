import { Injectable } from '@nestjs/common';
import { CreateEmployeeAvailabilityDto } from './dto/create-employee-availabilty.dto';
import { UpdateEmployeeAvailabilityDto } from './dto/employee-availabilty.dto';
import { CreateDailyScheduleDto } from './dto/create-daily-schedule.dto';
import { UpdateDailyScheduleDto } from './dto/update-daily-schedule.dto';
import { ScheduleRequestBody } from './dto/schedule-request-body.query';
import { AvailabiltyRequestBody } from './dto/availability-request-body.query';
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'
import { Schedule } from './types/employee-schedule.type';

@Injectable()
export class OperationsService {

    constructor(
        @InjectQueue('logistics') private logisticsQueue: Queue,
        @InjectQueue('processing') private processingQueue: Queue
    ) {  }

    submitEmployeeAvailability(
        employeeId: string,
        createEmployeeAvailabilityDto: CreateEmployeeAvailabilityDto
    ): string {
        return 'Employee availability successfully submitted.'
    }

    updateEmployeeAvailability(
        employeeId: string,
        availabilityId: string,
        updateEmployeeAvailabilityDto: UpdateEmployeeAvailabilityDto
    ): string {
        return 'Employee availability successfully updated.'
    }

    createDailySchedule(
        createDailyScheduleDto: CreateDailyScheduleDto,
    ): string {
        return 'Daily schedule successfully submitted.'
    }

    updateDailySchedule(
        employeeId: string,
        date: Date,
        updateEmployeeScheduleDto: UpdateDailyScheduleDto
    ): string {
        return 'Daily schedule successfully updated.'
    }

    fetchAvailability(reqBody: AvailabiltyRequestBody): Availability {
        if (reqBody.availabiltyId) {
            return 
        } else {
            return 
        }
    }

    fetchEmployeeAvailability(employeeId: string, reqBody: AvailabiltyRequestBody): Availability {
        if (reqBody.availabiltyId) {
            return 
        } else {
            return 
        }
    }

    fetchSchedule(reqBody: ScheduleRequestBody): Schedule {
        if (reqBody.scheduleId) {
            return 
        } else {
            return 
        } 
    }

    fetchEmployeeSchedule(employeeId: string, reqBody: ScheduleRequestBody): Schedule {
        if (reqBody.scheduleId) {
            return 
        } else {
            return 
        }
    }

    deleteEmployeeAvailability(employeeId: string, availabilityId: string): string {
        return `Successfully deleted availability entry ${availabilityId} for ${employeeId}`;
    }
}
