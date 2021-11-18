
import { Test } from '@nestjs/testing';
import { BlueprintsService } from '../../../src/administration/blueprints/blueprints.service';


describe('test BlueprintsService', () => {
    let blueprintsService: BlueprintsService;


    beforeEach(async () => {

        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [BlueprintsService, BlueprintsServiceProvider],
        }).compile();
        blueprintsService = moduleRef.get<BlueprintsService>(BlueprintsService);

    });

    test('BlueprintsService business', async () => {
        // todo mock && call && assert

    });
    
});
