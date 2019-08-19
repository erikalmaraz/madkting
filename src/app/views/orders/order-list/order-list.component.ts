import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../core/services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  productList: any = [];

  constructor(
    private ordersService: OrdersService,
    private router: Router
  ) { }

  ngOnInit() {
    const _ = this;
    _.getProducts();
  }

  getProducts(){
    const _ = this;
    _.ordersService.getOrders().subscribe((data) => {
        _.productList = data;
      },
      err => {
        console.log(err, ' Error in get products');
      }
    )
  }
}
