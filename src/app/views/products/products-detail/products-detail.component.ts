import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  productItem: any = [];
  productId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    const _ = this;
    _.productId = this.activatedRoute.snapshot.paramMap.get('id')
    _.getProducts()
  }

  getProducts(){
    const _ = this;
    _.productsService.getproductsById(_.productId).subscribe((data) => {
        _.productItem = data;
        // _.productId
        console.log(_.productItem);
      },
      err => {
        console.log(err, ' Error in get products');
      }
    )
  }
}
