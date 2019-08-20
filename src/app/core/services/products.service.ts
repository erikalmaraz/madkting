import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  api: string = "https://api.software.madkting.com";
  shopPK: number = 76;

  constructor(private http: HttpClient) { }


  getproducts(page, results){
    const _ = this;
    let header = new HttpHeaders();
    let authorization = header.append('Authorization', 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2');
    let params = {
      page_size: results,
      page: page
    }
    return _.http.get(`${_.api}/shops/${_.shopPK}/products/`, {
      params: params,
      headers: authorization
    })
  }

  getproductsById(id){
    const _ = this;
    let header = new HttpHeaders();
    let authorization = header.append('Authorization', 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2');
    return _.http.get(`${_.api}/shops/${_.shopPK}/products/${id}/`, {headers: authorization})
  }

}
