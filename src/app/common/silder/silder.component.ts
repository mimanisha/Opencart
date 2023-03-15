import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent implements OnInit {

  cats : any []=[];
  
  constructor( private _rest:RestService) { }

  ngOnInit(): void {
    this.getcats();
  }

  
  getcats(){
    this._rest.getcats().subscribe(data=>{
      this.cats = data as any;
    },err =>{
      console.log(err);
    })
  }


}
