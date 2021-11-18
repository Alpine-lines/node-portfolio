import { ProductionCycle } from "./production-cycle.type";
import { UnitsOfMeasurement } from "./units-of-measurement.type";

export type ProductionFeatures = {
    marketId: number // Mass market / metropolitan area of operation identifier.
    productionCapacity?: number; // Estimate of how many units of product will be produced in the next harvest cycle.
    unitOfMeasurement?: UnitsOfMeasurement; // Enum containing all possible units of measurement.
    productionCycle?: ProductionCycle; // 
    productionCycleLength?: Date; // Average predicted length of production cycle
    projectedAvailableQuantity?: number;
}