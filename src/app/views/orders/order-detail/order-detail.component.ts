import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../core/services/orders.service';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  productItem: any = [];
  productId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    const _ = this;
    _.productId = this.activatedRoute.snapshot.paramMap.get('id')
    _.getProducts()
  }

  getProducts(){
    const _ = this;
    _.ordersService.getOrderById(_.productId).subscribe((data) => {
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
