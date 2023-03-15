import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { RestService } from 'src/app/services/rest.service';
import { SnipperService } from 'src/app/snipper/snipper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _product:ProductService,private _rest:RestService,
    private _snipper:SnipperService) { }

id = 0;
cat ='';
c :any[]=[];

  ngOnInit(): void {
    this._snipper.show('loading products....');
    this._rest.checktoken();

    this._rest.getAllproducts().subscribe((data) => {
      this._snipper.hide();
      console.log(data);
      this._product.products = data as any;
    }, (err) =>{
      this._snipper.hide();
        console.log(err);
    })

    this._rest.getlimitproduct(this.id).subscribe((data:any) => {
      console.log(data);
      this._product.products = data as any;
    }, (err:any) => {
        console.log(err);
    })



    this._rest.getcats().subscribe()

    this._rest.getcategory(this.cat).subscribe(data => {
      console.log(data);
      this._product.products = data as any;
    },err => {
      console.log(err);
    })
  }
  }


