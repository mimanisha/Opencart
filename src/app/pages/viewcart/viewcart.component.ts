import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  id = 0;
  product: any;
  cat = '';

  constructor( private _route:ActivatedRoute,
    public _product:ProductService,
    private _rest:RestService) { }

  ngOnInit(): void {
    this._route.params.subscribe(data => {
      this.id = data['id'];
      this._rest.getlimitproduct(this.id).subscribe(data=>{
        console.log(data);
        this.product = data;
      }, err => {
        console.log(err);
      })

      this._rest.getcategory(this.cat).subscribe(data =>{
        console.log(data);
        this.product = data;
      }, err => {
        console.log(err);
      })

    })
  }
}
