import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnipperService } from 'src/app/snipper/snipper.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private _rest: RestService,
    public _user: UserService,
    private _router: Router,
    private _snipper:SnipperService) {
    this.loginform = new FormGroup({
      username: new FormControl('mor_2314', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('83r5^_', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
    this.checktoken();
  }

  getlogin() {
    if (this.loginform.valid) { //checks if loginform is valid
      
      this._rest.getlogin(this.loginform.value).subscribe( //subscribing to rest login method.
        response => {
          console.log(response);
          const data = response as any;
          const token = data.token;
          const decoded = jwt_decode(token);
          console.log(decoded);
          localStorage.setItem('token', token);
          this._router.navigate(['home'])
        },
        err => {
          console.log(err);
          alert('Invalid Username and password');
        }
      )
    } else {
      alert('Enter valid details');
    }


  }

  checktoken() {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token) as any;
      this._user.username = decoded.user;
      this._router.navigate(['/app']);
    }
  }


}
