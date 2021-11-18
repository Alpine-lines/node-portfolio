import { Address } from "src/customers/types/address.type";
import { EmployeeTypes } from "../types/employee-type.enum";

export class CreateEmployeeDto {
    employeeType?: EmployeeTypes;
    role?: EmployeeTypes;
    title?: string;
    email?: string;
    phoneNumber?: string;
    address?: Address;
    passwordHash?: string;
}
