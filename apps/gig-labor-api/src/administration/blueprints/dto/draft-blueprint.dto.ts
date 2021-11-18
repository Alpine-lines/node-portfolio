import { Client } from "@googlemaps/google-maps-services-js";
import { Dimensions } from "../type/dimensions.type";

export class DraftBlueprintDto {
    clientId?: string;
    client: Client;
    dimensions: Dimensions;
    additionalRequirements?: string;
    approval: boolean = false;
}