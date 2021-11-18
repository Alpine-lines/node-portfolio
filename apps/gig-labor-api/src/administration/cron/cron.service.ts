import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { Client } from "@googlemaps/google-maps-services-js";
import { ScheduleCronDto } from './dto/schedule-cron.dto';
import { UpdateCronDto } from './dto/update-schedule-cron.dto';

@Injectable()
export class CronService {
    constructor(
        private schedulerRegistry: SchedulerRegistry
    ) { }

    /**
     * Logger service available logs:
     *      - log
     *      - warn
     *      - error
     *      - verbose
     */
    private readonly logger = new Logger(CronService.name);
    
    // Regular daily and weekly cron jobs w/ names.
    @Cron(CronExpression.EVERY_DAY_AT_7PM, {
        name: 'logistics',
        timeZone: 'America/Denver'
    })
    handleLogisticsQueue() {
        this.logger.debug('Logistics task processing...');
    }
    
    @Cron('* 19 * * 6', {
        name: 'processing',
        timeZone: 'America/Denver'
    })
    handleProcessingQueue() {
        this.logger.debug('Processing task processing...');
    }
    
    @Cron('* 19 * * 6', {
        name: 'administrative',
        timeZone: 'America/Denver'
    })
    handleAdministrativeQueue() {
        this.logger.debug('Administrative task processing...');
    }

    // Dynamic API cron job functions utilizing names as identifiers.
    
    /**
     * @name scheduleCron
     * @typedef {Object} ScheduleCronDto - Data transfer object for the schedule cron function.
     * @property {string} - name The name and identifier of the CronJob .
     * @property {string | CronExpression} - Cron expression to be scheduled.
     * @property {Function} - Callback Function to be executed at cron interval.
     * @returns {CronJob} Returns a valid CronJob object.
     */
    scheduleCron(scheduleCronDto: ScheduleCronDto): CronJob {
        const job = new CronJob(scheduleCronDto.cron, () => {
            this.logger.warn(`Cron job ${scheduleCronDto.name} scheduled with expression ${scheduleCronDto.cron}!`);
        });
        this.schedulerRegistry.addCronJob(scheduleCronDto.name, job);
        job.start();
        return job;
    }

    /**
     * @name updateCron
     * @typedef {Object} UpdateCronDto - Data transfer object for the update cron function. 
     * @property {string} - name The name and identifier of the CronJob .
     * @property {string | CronExpression} - Cron expression to be schseduled.
     * @property {Function} - Callback Function to be executed at cron interval.
     * @returns {CronJob} Returns a valid CronJob object.
     */
    updateCron(updateCronDto: UpdateCronDto): CronJob {
        this.schedulerRegistry.deleteCronJob(updateCronDto.name);
        const job = new CronJob(updateCronDto.cron, () => {
            updateCronDto.callback();
            this.logger.warn(`cron job ${updateCronDto.name} with job expression ${updateCronDto.cron}!`);
        });
        this.schedulerRegistry.getCronJob(updateCronDto.name);
        job.start();
        return job;
    }

    /**
     * @name getCron
     * @param name The name and identifier of the CronJob .
     * @type {string} 
     * @returns {CronJob} Returns a valid CronJob object.
     */
    getCron(name: string): CronJob {
        const job = this.schedulerRegistry.getCronJob(name);
        return job;
    }

    /**
     * @name getCrons
     * @returns {CronJob[]} Returns a valid Map<string, CronJob> object.
     */
    getCrons(): Map<string, CronJob> {
        const jobs = this.schedulerRegistry.getCronJobs();
        jobs.forEach((value, key, map) => {
            let next;
            try {
            next = value.nextDates().toDate();
            } catch (e) {
            next = 'error: next fire date is in the past!';
            }
            this.logger.log(`job: ${key} -> next: ${next}`);
        });
        return jobs;
    }

    /**
     * @name deleteCron
     * @param name The name and identifier of the CronJob .
     * @type {string} 
     * @returns {string} Returns a string confirming the cron job's deletion.
     */
    deleteCron(name: string): string {
        this.schedulerRegistry.deleteCronJob(name);
        this.logger.warn(`job ${name} deleted!`);
        return `job ${name} deleted!`;
    }
}