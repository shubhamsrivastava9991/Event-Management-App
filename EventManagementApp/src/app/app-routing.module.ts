import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { identity } from 'rxjs';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
  {path:'employee/:id', component:EmployeeDetailsComponent},
  {path:'employeeslist', component:EmployeelistComponent},
  {path:'employeeupdate/:id', component:UpdateEmployeeComponent},
  {path:'newemployee', component:NewEmployeeComponent},
  {path:'employeedelete/:id',component:EmployeeDeleteComponent},
  {path:'home', component:HomeComponent},
  {path:'succes',component:SuccessComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
