import { AdditionalCustomerInformation } from "./additional-customer-information.type";
import { Address } from "./address.type";
import { CustomerTypes } from "./customer-types.enum";

export type Customer = {
    customerId: string;
    customerType: CustomerTypes.PRODUCER;
    business?: string;
    passwordHash: string;
    email: string;
    phoneNumber: string;
    address: Address
    additionalInformation?: AdditionalCustomerInformation
}
