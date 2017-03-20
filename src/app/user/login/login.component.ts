import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNaming:string = "fe";
  constructor(private authService: AuthService, private router:Router) { }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['User/Profile'])
  }
  cancelLogin(){
    this.router.navigate(['Worker',3])
  }

  ngOnInit() {
  }

}
