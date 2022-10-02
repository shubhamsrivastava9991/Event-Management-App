import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
   id!: any;
  constructor(private employeeService:EmployeesService, private activatedRoute:ActivatedRoute) { 
      this.activatedRoute.params.subscribe(param=>{ 
        const val=param;
        this.id=param['id'];


     })
     
  }

  
  employee:any

  ngOnInit(): void {
    
    this.employee=this.employeeService.getEmployeeDetais(this.id).subscribe((data: any) =>{this.employee=data ;console.log(this.employee)},
     (err: any)=>{console.log('unable to get data')})
  }

}



