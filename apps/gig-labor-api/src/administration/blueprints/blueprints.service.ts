import { Injectable } from '@nestjs/common';
import { DraftBlueprintDto } from './dto/draft-blueprint.dto';
import { FinalizeBlueprintDto } from './dto/finalize-blueprint.dto';
import { UpdateBlueprintDto } from './dto/update-blueprint.dto';
import { Blueprint } from './entities/blueprint.entity';

@Injectable()
export class BlueprintsService {

    constructor() {  }

    // Blueprint CRUD functionality

    draftBlueprint(draftBlueprintDto: DraftBlueprintDto): Blueprint {
        return 
    }

    updateBlueprint(blueprintId: string, updateBlueprintDto: UpdateBlueprintDto): Blueprint {
        return 
    }

    finalizeBlueprint(blueprintId: string, finalizeBlueprintDto: FinalizeBlueprintDto): Blueprint {
        return 
    }

    getBlueprint(blueprintId: string): Blueprint {
        return 
    }

    getAllBlueprints(): Blueprint[] {
        return 
    }

    // Blueprint template CRUD functionality

    draftBlueprintTemplate(draftBlueprintDto: DraftBlueprintDto): Blueprint {
        return    
    }

    updateBlueprintTemplate(blueprintId: string, updateBlueprintDto: UpdateBlueprintDto): Blueprint {
        return 
    }

    finalizeBlueprintTemplate(bluerintId: string, finalizeBlueprintDto: FinalizeBlueprintDto): Blueprint {
        return 
    }

    getBlueprintTemplate(blueprintId: string): Blueprint {
        return 
    }

    getAllBlueprintTemplates(): Blueprint[] {
        return 
    }
}
