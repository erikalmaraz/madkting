import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  api: string = "https://api.software.madkting.com";
  shopPK: number = 76;

  constructor(private http: HttpClient) { }

  getOrders(){
    const _ = this;
    let header = new HttpHeaders();
    let authorization = header.append('Authorization', 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2');
    return _.http.get(`${_.api}/shops/${_.shopPK}/products`, {headers: authorization})
  }

  getOrderById(id){
    const _ = this;
    let header = new HttpHeaders();
    let authorization = header.append('Authorization', 'Token 599d4be34f2cf59df13ebb27e9852570bc0684d2');
    return _.http.get(`${_.api}/shops/${_.shopPK}/products/${id}`, {headers: authorization})
  }

}
