import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  createCustomer(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  updateCustomer(customerId: string, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${customerId} customer`;
  }

  findAllCustomer() {
    return `This action returns all customers`;
  }

  findOneCustomer(customerId: string) {
    return `This action returns a #${customerId} customer`;
  }

  removeCustomer(customerId: string) {
    return `This action removes a #${customerId} customer`;
  }
}
