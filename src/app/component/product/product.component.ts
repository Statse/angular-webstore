import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Product} from '../../types/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

  action(product: Product):void{
    alert("Product id is " + product.id)
    console.log(product)
  }

}
