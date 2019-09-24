import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
    employee=[
        {id:1 , name:'ABC' , dept:'CSE'},
        {id:2 , name:'XYZ' , dept:'ME'} ,
        {id:3 , name:'PQR' , dept:'CE'}
      ]
      
      getEmployee()
      {
          return this.employee
      }

      setEmployee(emp)
      {
        this.employee.push(emp)
      }
}