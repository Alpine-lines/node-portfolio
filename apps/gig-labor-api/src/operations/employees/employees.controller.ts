import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @Put(':employeeId')
  updateEmployee(@Param('employeeId') employeeId: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  }

  @Get()
  findAllEmployee() {
    return this.employeesService.findAllEmployees();
  }

  @Get(':employeeId')
  findOneEmployee(@Param('employeeId') employeeId: string) {
    return this.employeesService.findOneEmployee(employeeId);
  }

  @Delete(':employeeId')
  removeEmployee(@Param('employeeId') employeeId: string) {
    return this.employeesService.removeEmployee(employeeId);
  }
}
