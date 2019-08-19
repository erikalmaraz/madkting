import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isInDetail: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const _ = this;
    if(_.router.url.includes('products')){
      _.isInDetail = true;
    }
  }
}
