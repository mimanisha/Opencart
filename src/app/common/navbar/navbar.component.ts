import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import jwt_Decode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoggedIn = false;

  // cats : any []=[];

  constructor(public _rest:RestService,
  
    private _router:Router,
    public _user:UserService) {   }
     

  ngOnInit(): void {
    this.checktoken();
    // console.log(this.isLoggedIn);
  }

  // getcats(){
  //   this._rest.getcats().subscribe(data=>{
  //     this.cats = data as any;
  //   },err =>{
  //     console.log(err);
  //   })
  // }

  

    checktoken(){
      const token = localStorage.getItem('token');
      if(token){

        const decoded = jwt_Decode(token)as any;
        this._user.username = decoded.user;
        // this.isLoggedIn = true;
    }
  }

  logout(){
    if (confirm('are you sure ?')){
      localStorage.removeItem('token');
      this._user.username = undefined;
      this._router.navigate(['/login']);
    }
  }
}
