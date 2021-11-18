import { Product } from "src/operations/types/product.type";

export type AdditionalCustomerInformation = {
    role?: string; // Single point of contact's title
    availability?: string[];
    productsOfInterest?: Product[];
}