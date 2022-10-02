import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeesService) { }
  addEmpForm!: FormGroup;

  ngOnInit(): void {
    this.addEmpForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl()
    })
  }

  addEmp() {

    this.addEmpForm.valueChanges.subscribe()
    console.log(this.addEmpForm.value);

   return this.employeeService.addEmployee(this.addEmpForm.value).subscribe(data =>{},error=>{})
  }





}
