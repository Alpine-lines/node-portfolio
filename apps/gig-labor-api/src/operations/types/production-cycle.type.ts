export type ProductionCycle = {
    cycleStart: Date; // Start of currnet cycle
    cycleEnd: Date; // End of current cycle
}

export type ProductionCycles = {
    productionCycles?: ProductionCycle[];
}