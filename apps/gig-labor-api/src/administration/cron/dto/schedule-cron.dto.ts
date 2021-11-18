import { CronExpression } from "@nestjs/schedule";

export class ScheduleCronDto {
    name: string;
    cron: string | CronExpression;
    callback: Function;
}