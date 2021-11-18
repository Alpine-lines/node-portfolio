import { PartialType } from '@nestjs/mapped-types';
import { DraftBlueprintDto } from "./draft-blueprint.dto";

export class UpdateBlueprintDto extends PartialType(DraftBlueprintDto) { }