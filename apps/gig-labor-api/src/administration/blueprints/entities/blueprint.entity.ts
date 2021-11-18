import { Address } from "src/customers/types/address.type";
import { Dimensions } from "../type/dimensions.type";

export class Blueprint {
    blueprintId: string;
    dimensions: Dimensions;
    buildSite: Address;
    contractor?: string;
    approved?: boolean;
}