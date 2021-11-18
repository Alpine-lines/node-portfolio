import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ContractorsService } from './contractors.service';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { UpdateContractorDto } from './dto/update-contractor.dto';

@Controller('contractors')
export class ContractorsController {
  constructor(private readonly contractorsService: ContractorsService) {}

  @Post()
  create(@Body() createContractorDto: CreateContractorDto) {
    return this.contractorsService.create(createContractorDto);
  }

  @Put(':contractId')
  update(@Param('contractId') contractId: string, @Body() updateContractorDto: UpdateContractorDto) {
    return this.contractorsService.update(contractId, updateContractorDto);
  }

  @Get()
  findAll() {
    return this.contractorsService.findAll();
  }

  @Get(':contractId')
  findOne(@Param('contractId') contractId: string) {
    return this.contractorsService.findOne(contractId);
  }

  @Delete(':contractId')
  remove(@Param('contractId') contractId: string) {
    return this.contractorsService.remove(contractId);
  }
}
