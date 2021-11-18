import { Address } from "src/customers/types/address.type";
import { EmployeeTypes } from "../types/employee-type.enum";

export class Employee {
    employeeId: string;
    employeeType: EmployeeTypes;
    role: string;
    email: string;
    phoneNumber: string;
    address: Address;
    passwordHash: string;
}