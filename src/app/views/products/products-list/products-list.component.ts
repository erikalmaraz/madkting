import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productList: any = [];
  currentPage: number = 1;
  nextPageNumber: number = 2;
  resultsPerPage: number = 10;
  resultsThatPageReturn: any = 0;
  resultsLength: number = 100;
  totalPages: any;
  numberBase: number = 1;
  numberBaseTo: number;
  isLoadingProducts: boolean = false;
  isSmallerByOne: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    const _ = this;
    let wayToKnowPages = (_.resultsLength / _.resultsPerPage);
    let isTotalPagesFloat = _.isFloat(wayToKnowPages);
    _.getProducts();
    _.numberBaseTo = _.resultsPerPage;
    _.totalPages = isTotalPagesFloat ? parseInt(wayToKnowPages.toString()) + 1 : wayToKnowPages;
  }

  isFloat(n){
    return Number(n) === n && n % 1 !== 0;
  }

  getProducts(){
    const _ = this;
    _.isLoadingProducts = true;
    _.productsService.getproducts(_.currentPage, _.resultsPerPage).subscribe((data) => {
        _.productList = data;
        _.resultsThatPageReturn = (<any>data).length;
        _.isLoadingProducts = false;
      },
      err => {
        _.isLoadingProducts = false;
        console.log(err, ' Error in get products');
      }
    )
  }

  nextPage(){
    const _ = this;
    let isSmallerByOne = (_.totalPages - _.currentPage) == 1;
    let isTheLastPage = (_.currentPage == _.totalPages);
    if(isSmallerByOne){
      _.isSmallerByOne = true;
    }
    if(isTheLastPage){
      return;
    }
    _.currentPage++;
    _.nextPageNumber++;
    _.numberBase = _.numberBase + _.resultsThatPageReturn;
    _.numberBaseTo = _.numberBaseTo + _.resultsThatPageReturn;
    _.getProducts();
  }

  prevPage(){
    const _ = this;
    let isSmallerByOne = (_.totalPages - _.currentPage) == 0;
    let isTheLastPage = (_.currentPage == _.totalPages);

    if(isSmallerByOne){
      _.isSmallerByOne = false;
    }

    if(_.currentPage == 1){
      return;
    }
    _.currentPage--;
    _.nextPageNumber--;
    _.numberBase = _.numberBase - _.resultsThatPageReturn;
    _.numberBaseTo = _.numberBaseTo - _.resultsThatPageReturn;
    _.getProducts();

  }
}
