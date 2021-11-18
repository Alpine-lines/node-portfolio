import { ProductionFeatures } from "./production-features.type";

export type Product = {
    productId: string;
    productionFeatures: ProductionFeatures; // Integer representing the number of units to be produced in the next production interval.
    price: number; // Current Price according to supply and demand API.
}