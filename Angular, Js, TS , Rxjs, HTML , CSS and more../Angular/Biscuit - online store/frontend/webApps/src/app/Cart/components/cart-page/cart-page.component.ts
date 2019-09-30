import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CartService } from '../../../Shared/Services/cart.service';
import { HTTP_STATUS, SERVER } from 'src/app/Shared/enums';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems = [];
  askIfDeleteItemName = '';
  displayLoader = false;

  @ViewChild('askIfDeleteItemTemplate', { static: true }) askIfDeleteItemTemplate: NgbModalRef;
  @ViewChild('deleteCartTemplate', { static: true }) deleteCartTemplate: NgbModalRef;

  constructor(private cartService: CartService, private modalService: NgbModal, private http: HttpClient) { }

  ngOnInit() {
    this.http.post(`${SERVER.URL}/setstatusbyid/cart`, {}).subscribe();
    this.fetchCart();
  }

  removeItem(itemId) {
    this.cartService.deleteItem(itemId).subscribe(response => {
      if (response.status === HTTP_STATUS.OK) {
        console.log('item removed');
        this.fetchCart();
      }
    });
  }

  clearCart() {
    this.openModal(this.deleteCartTemplate).then(() => {
      this.cartService.clearCart().subscribe(() => this.fetchCart());
    });
  }

  openModal(modalTemplateRef: NgbModalRef) {
    return this.modalService.open(modalTemplateRef, {
      size: 'sm',
      centered: true
    }).result;
  }

  askIfSeleteItem(item) {
    this.askIfDeleteItemName = item.name;
    this.openModal(this.askIfDeleteItemTemplate).then(() => this.removeItem(item._id), () => { });
  }

  fetchCart() {
    this.displayLoader = true;
    this.cartService.getUserCart().subscribe(cart => {
      this.cartItems = cart as Array<any>;
      this.cartItems = this.cartService.removeDuplicates(this.cartItems);
      this.displayLoader = false;
    });
  }

  get cartHasItems() {
    return Object.keys(this.cartItems).length;
  }
}
