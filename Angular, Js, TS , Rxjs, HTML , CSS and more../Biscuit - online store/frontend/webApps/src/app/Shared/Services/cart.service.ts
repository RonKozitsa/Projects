import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addItem(itemId: string) {
    return this.http.post(`${SERVER.URL}/cart/additem/${itemId}`, {}, { observe: 'response' });
  }

  deleteItem(itemID: string) {
    return this.http.delete(`${SERVER.URL}/cart/deleteItem/${itemID}`, { observe: 'response' });
  }

  clearCart() {
    return this.http.delete(`${SERVER.URL}/cart/deleteAllItems`, { observe: 'response' });
  }


  getUserCart() {
    return this.http.get(`${SERVER.URL}/cart/getusercart`);
  }

  removeDuplicates(cart) {
    const nonRepeatedCartItems = [];
    cart.forEach(cartItem => {
      if (nonRepeatedCartItems.findIndex(item => item._id === cartItem._id) < 0) {
        nonRepeatedCartItems.push(cartItem);
      }
    });
    return nonRepeatedCartItems;
  }

}
