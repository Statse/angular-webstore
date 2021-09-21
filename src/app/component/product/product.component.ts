import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  action():void{
    alert("stuff happens")
  }

}
