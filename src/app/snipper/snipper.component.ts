import { Component, OnInit } from '@angular/core';
import { SnipperService } from './snipper.service';

@Component({
  selector: 'app-snipper',
  templateUrl: './snipper.component.html',
  styleUrls: ['./snipper.component.css']
})
export class SnipperComponent implements OnInit {

  constructor(public _snipper:SnipperService) { }

  ngOnInit(): void {
  }

}
