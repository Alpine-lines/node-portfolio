import { Address } from "src/customers/types/address.type";
import { SinglePointOfContact } from "../types/single-point-of-contact.type";

export class CreateContractorDto {
    contractorId?: string;
    businessName: string;
    singlePointOfContact: SinglePointOfContact;
    primaryAddress: Address;
}
