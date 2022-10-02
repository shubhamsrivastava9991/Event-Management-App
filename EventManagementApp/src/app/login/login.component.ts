import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   username:string=''
   password:string=''
   success=false;

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){

   if(loginForm.value.username=="admin"&&loginForm.value.password=="12345"){
    this.success=true;
  }
  

  }

}
