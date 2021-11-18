import { Module } from '@nestjs/common';
import { BlueprintsService } from './blueprints.service';
import { BlueprintsController } from './blueprints.controller';

@Module({
  controllers: [BlueprintsController],
  providers: [BlueprintsService]
})
export class BlueprintsModule {}
