import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BlueprintsService } from './blueprints.service';
import { DraftBlueprintDto } from './dto/draft-blueprint.dto';
import { FinalizeBlueprintDto } from './dto/finalize-blueprint.dto';
import { UpdateBlueprintDto } from './dto/update-blueprint.dto';
import { Blueprint } from './entities/blueprint.entity';

@Controller('blueprints')
export class BlueprintsController {
  constructor(private readonly blueprintsService: BlueprintsService) {}

  // Blueprint CRUD functions

  @Post()
  async draftBlueprint(@Body() draftBlueprintDto: DraftBlueprintDto): Promise<Blueprint> {
    return await this.blueprintsService.draftBlueprint(draftBlueprintDto);
  }

  @Put(':blueprintId')
  async updateBlueprint(
    @Param('blueprintId') blueprintId: string,
    @Body() updateBlueprintDto: UpdateBlueprintDto
  ): Promise<Blueprint> {
    return await this.blueprintsService.updateBlueprint(blueprintId, updateBlueprintDto);
  }

  @Put(':blueprintId/finalize')
  async finalizeBlueprint(
    @Param('blueprintId') blueprintId: string,
    @Body() finalizeBlueprintDto: FinalizeBlueprintDto
  ): Promise<Blueprint> {
    return await this.blueprintsService.finalizeBlueprint(blueprintId, finalizeBlueprintDto);
  }

  @Get(':blueprintId')
  async getBlueprint(@Param('blueprintId') blueprintId: string): Promise<Blueprint> {
    return await this.blueprintsService.getBlueprint(blueprintId);
  }

  @Get()
  async getAllBlueprints(): Promise<Blueprint | Blueprint[]> {
    return await this.blueprintsService.getAllBlueprints();
  }

  // Blueprint templates CRUD functionality

  @Post('template')
  async draftBlueprintTemplate(@Body() draftBlueprintDto: DraftBlueprintDto): Promise<Blueprint> {
    return await this.blueprintsService.draftBlueprintTemplate(draftBlueprintDto);
  }

  @Put('template/:templateId')
  async updateBlueprintTemplate(
    @Param('templateId') templateId: string,
    @Body() updateBlueprintDto: UpdateBlueprintDto
  ): Promise<Blueprint> {
    return await this.blueprintsService.updateBlueprintTemplate(templateId, updateBlueprintDto);
  }

  @Get('template/:templateId')
  async getBlueprintTemplate(@Param('templateId') templateId: string): Promise<Blueprint> {
    return await this.blueprintsService.getBlueprintTemplate(templateId);
  }

  @Get()
  async getAllBlueprintTemplates(): Promise<Blueprint | Blueprint[]> {
    return await this.blueprintsService.getAllBlueprintTemplates();
  }

}
