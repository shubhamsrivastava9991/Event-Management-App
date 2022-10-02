import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private employeeService:EmployeesService) { }
  

employees:any


  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: any) =>{this.employees=data}, (err: any)=>{console.log('unable to get data')})
  }

}
