import { Route } from "../types/route.type";

export class CreateDailyScheduleDto {
    date?: Date;
    employeeRoutes?: Route[];
}