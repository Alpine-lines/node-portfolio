import { Route } from "../types/route.type";

export class UpdateDailyScheduleDto {
    scheduleId?: string;
    date?: Date;
    employeeRoutes?: Route[];
}