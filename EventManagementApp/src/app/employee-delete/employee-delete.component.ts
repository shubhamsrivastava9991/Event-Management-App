import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
 id!:any
  constructor(private activatedRoute:ActivatedRoute, private employeesService:EmployeesService) { 
    this.activatedRoute.params.subscribe(param=>{ 
      const val=param;
      this.id=param['id'];


   })
  }
employee!:any
  ngOnInit(): void {
    this.employee=this.employeesService.deleteEmployee(this.id).subscribe((data: any) =>{this.employee=data ;console.log(this.employee)},
    (err: any)=>{console.log('unable to delete data')})
    
  }

}
