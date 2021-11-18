import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.customersService.createCustomer(createCustomerDto);
  }

  @Put(':customerId')
  async updateCustomer(@Param('customerId') customerId: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return await this.customersService.updateCustomer(customerId, updateCustomerDto);
  }

  @Get()
  async findAllCustomer() {
    return await this.customersService.findAllCustomer();
  }

  @Get(':customerId')
  async findOneCustomer(@Param('customerId') customerId: string) {
    return await this.customersService.findOneCustomer(customerId);
  }

  @Delete(':customerId')
  async removeCustomer(@Param('customerId') customerId: string): Promise<string> {
    return await this.customersService.removeCustomer(customerId);
  }
}
