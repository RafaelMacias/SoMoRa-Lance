import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user)
    .subscribe(
      res => {
        // console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/privadas']);
      },
      err => console.log(err)
    )
    // console.log(this.user);
  }

}
