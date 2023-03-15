import { Component,Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id = 0;
  @Input() title = ""
  @Input() image =""
  @Input() price = ""
  @Input() date = ""
  @Input() description = ""
  @Input() rating = ""

  constructor( public _product:ProductService,) { }

  ngOnInit(): void {
  }

}
