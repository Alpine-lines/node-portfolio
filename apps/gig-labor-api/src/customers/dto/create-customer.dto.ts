import { AdditionalCustomerInformation } from "../types/additional-customer-information.type";
import { Address } from "../types/address.type";
import { CustomerTypes } from "../types/customer-types.enum";

export class CreateCustomerDto {
    customerType?: CustomerTypes;
    business?: string;
    passwordHash?: string;
    email?: string;
    phoneNumber?: string;
    address?: Address
    additionalInformation?: AdditionalCustomerInformation
}
