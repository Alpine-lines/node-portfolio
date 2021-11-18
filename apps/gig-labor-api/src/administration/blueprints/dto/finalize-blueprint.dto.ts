import { PickType } from '@nestjs/mapped-types';
import { DraftBlueprintDto } from "./draft-blueprint.dto";

export class FinalizeBlueprintDto extends PickType(DraftBlueprintDto, ['clientId']) { }