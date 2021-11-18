import { Injectable } from '@nestjs/common';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { UpdateContractorDto } from './dto/update-contractor.dto';

@Injectable()
export class ContractorsService {
  create(createContractorDto: CreateContractorDto) {
    return 'This action adds a new contractor';
  }

  update(contactorId: string, updateContractorDto: UpdateContractorDto) {
    return `This action updates a #${contactorId} contractor`;
  }

  findAll() {
    return `This action returns all contractors`;
  }

  findOne(contactorId: string) {
    return `This action returns a #${contactorId} contractor`;
  }

  remove(contactorId: string) {
    return `This action removes a #${contactorId} contractor`;
  }
}
