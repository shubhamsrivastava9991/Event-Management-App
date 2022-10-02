import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
interface Employee{
  id:number,
  firstnam:string,
  lastname:string,
  email:string

}


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }


employees:any
  getEmployees(): Observable<Employee>{
    const header1= new HttpHeaders({
      'content-type':'application/json',
      'authenticationtoken':'123456'
    })

    const param1=new HttpParams().set( 'pageNum','10' ).set('pageSize','100')

    this.employees=this.http.get<Employee>('http://localhost:3000/employees',{headers:header1 ,params:param1});
    return this.employees
  }

  getEmployeeDetais(id: any){

    this.employees=this.http.get('http://localhost:3000/employees/' +id)
    return this.employees
  }



  addEmployee(emp:any ){
    const body={first_name:emp.firstname, last_name:emp.lastname, email: emp.email}
    console.log(body)
   return this.http.post<any>('http://localhost:3000/employees', body)
   
  }


  
  updateEmployee(emp:any,id:any){
    const body={first_name:emp.firstname, last_name:emp.lastname, email: emp.email}
   return this.http.put<any>('http://localhost:3000/employees/'+id,body)
  }

  deleteEmployee(id:any){
    console.log(id)
    return this.http.delete<any>('http://localhost:3000/employees/'+id)
  }
}
