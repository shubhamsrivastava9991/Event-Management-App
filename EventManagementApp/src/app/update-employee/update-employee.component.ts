import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
id!:any
  constructor(private employeeService : EmployeesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param=>{ 
      const val=param;
      this.id=param['id'];


   })
   

   }
 upEmpForm!: FormGroup;
  ngOnInit(): void {
    this.upEmpForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl()
    })
  }

  updateEmp(){
    this.upEmpForm.valueChanges.subscribe();
    

   return  this.employeeService.updateEmployee(this.upEmpForm.value ,this.id).subscribe(data =>{console.log(data)}, error =>{console.log(error)})

  }

}
