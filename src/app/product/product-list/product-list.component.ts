import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() productListsByCat;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.productListsByCat);
  }

}
