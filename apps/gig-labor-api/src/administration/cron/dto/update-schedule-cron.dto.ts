import { PartialType } from '@nestjs/mapped-types';
import { ScheduleCronDto } from './schedule-cron.dto';

export class UpdateCronDto extends PartialType(ScheduleCronDto) { }