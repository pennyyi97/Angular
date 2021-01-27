import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
  private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    console.log('여기 지나가니?');
    console.log(this.username, this.password, this.invalidLogin);
    console.log('====================================');

    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
        console.log('여기도 지나가나?');
      },
      error => {
        console.log('여기지나가면 오륜데');
        this.invalidLogin = true
      }
    );
  }

}
