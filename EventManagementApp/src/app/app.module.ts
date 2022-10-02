import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    NewEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeDeleteComponent,
    HomeComponent,
    SuccessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
