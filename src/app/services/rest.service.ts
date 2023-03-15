import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  isLoggedIn = false;
  loggeduser="";
  constructor(private _http:HttpClient,
    private _route:ActivatedRoute,
    private _router:Router) { }

  getlogin(data:any){
    const url = 'https://fakestoreapi.com/auth/login';
    return this._http.post(url,data);
  }
  
  getAllproducts(){
    const url = 'https://fakestoreapi.com/products';

    // const url =  'http://localhost:8000/get_categories'; 
    return this._http.get(url);
  }

  getlimitproduct(id:number){
    const url = 'https://fakestoreapi.com/products?limit=4';
  
    return this._http.get(url);
  }


  
  getcats(){
    const url = 'https://fakestoreapi.com/products/categories';
    return this._http.get(url);
  }

// addproduct(){
//   const url = 'http://localhost:8000/add_product';
//   return this._http.post(url);
// }

  getcategory( cat :string){
    const url = 'https://fakestoreapi.com/products/category/' + cat;
    //  const url =  'http://localhost:8000/get_categories'; + cat;
    return this._http.get(url);
  }


  checktoken(){
    const token = localStorage.getItem('token');
    if(token){
      this.isLoggedIn = true;
      this.loggeduser;
  }
  else (
    this._router.navigate(['login'])
  )
}

}
