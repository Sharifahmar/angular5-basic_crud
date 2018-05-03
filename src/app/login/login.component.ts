import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

  }

  login() {
    if (this.loginService.login(this.userName, this.password)) {
      this.router.navigate(['/Users']);
   }
  }
}
