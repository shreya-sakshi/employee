import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employeeDetails=[
    {id:1 , name:'ABC' , dept:'CSE'},
    {id:2 , name:'XYZ' , dept:'ME'} ,
    {id:3 , name:'PQR' , dept:'CE'}
  ]
}
