import { Customer } from "src/customers/types/customer.types";
import { Material } from "./material.type";

export type Task = {
    taskId: string;
    client?: Customer;
    taskName: string;
    description: string;
    documentation: string;
    requiredMaterials?: Material[];
}