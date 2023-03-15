import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { RestService } from 'src/app/services/rest.service';
import { SnipperService } from 'src/app/snipper/snipper.service';

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {

  catname = '';
  products : any[] = [];
  c : any[] = [];

  constructor(  private _router:ActivatedRoute,
    private _rest:RestService,
    private _snipper:SnipperService) { }

  ngOnInit(): void {
    this._router.params.subscribe(data => {
      this.catname = data['cat'];
      this._snipper.show('loading' + this.catname);
      this._rest.getcategory(this.catname).subscribe(data=>{
        this._snipper.hide()
        this.products = data as any;
      },err => {
        this._snipper.hide()
      })
    })
  }

}
