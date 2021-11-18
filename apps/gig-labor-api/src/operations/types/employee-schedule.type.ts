import { Route } from "./route.type"

export type Schedule = {
    scheduleId: string;
    date: Date;
    employeeRoutes: Route[];
}

export type WeeklySchedule = {
    days: Schedule[];
}