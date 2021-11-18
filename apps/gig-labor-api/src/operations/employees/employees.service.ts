import { Injectable } from '@nestjs/common';
import { Route } from 'src/operations/types/route.type';
import { Task } from 'src/operations/types/task.type';
import qs from 'qs';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  createEmployee(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${employeeId} employee`;
  }

  findAllEmployees() {
    return `This action returns all employees`;
  }

  findOneEmployee(employeeId: string) {
    return `This action returns a #${employeeId} employee`;
  }

  removeEmployee(employeeId: string) {
    return `This action removes a #${employeeId} employee`;
  }

  // Cron job callback functions and helpers

  /**
   * @name routeTasksWithDistanceMatrix
   * @param tasks An array of Task object which need to be organized into a Map using the taskId as a key and properly optimized Route objects as a value.
   * @type {Task[]} Task[] - an array of Task objects.
   * @returns {Route[]} 
   */
  calculateRoutes(tasks: Task[]): Map<string, Route> {
      // FIXME: install google maps node.js API 
      //        and replace any with proper type.
      const apiKey = process.env.GOOGLE_MAPS_API_KEY;
      const origins = tasks.map((task) => {
          return (
              task.taskId,
              task.client.address
          );  
      });
      const destinations = origins[-1];
      const originsPath = qs.stringify(origins);
      const destinationsPath = qs.stringify(destinations);
      let routes: Map<string, Route>;
      const url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins' + encodeURIComponent(originsPath) + '&destinations=' + encodeURIComponent(destinationsPath) + `&key=${apiKey}`;
      // const distanceMatrix$: Observable<any> = of(this.httpService.get(`${url}=${originsPath}&destinations=${destinationsPath}&departure_time=now&&mode=DRIVING&units=imperial&key=${apiKey}`));
      return routes;
  } 

  /**
   * @name assignEmployeeRoute
   * @param employeeId Employee ObjectId in MongoDB.
   * @type {string} 
   * @param routeId Route identifier.
   * @type {string}
   * @param tasks The Tasks to be carried out on this route.
   * @returns {Route} Returns a Route object defining the order an employee must 
   *                  complete their assigned Tasks within. 
   */
  createRoute(employeeId: string, tasks: Task[]): void {
      const route: Route = {
          employeeId: employeeId,
          tasks: tasks
      }
  } 
}
