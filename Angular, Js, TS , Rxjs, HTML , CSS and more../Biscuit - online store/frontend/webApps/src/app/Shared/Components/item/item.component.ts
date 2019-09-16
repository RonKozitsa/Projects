import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger } from '@angular/animations';

import { ItemInterface } from '../../types.interface';
import { CartService } from '../../Services/cart.service';
import { animations } from '../../animations';
import { HTTP_STATUS } from '../../enums';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [trigger('fadeInOut', animations.fadeInOut)]
})
export class ItemComponent implements ItemInterface, OnInit {
  @Input() _id = '';
  @Input() name = '';
  @Input() desc = '';
  @Input() productType = '';
  @Input() pictureURL = '';
  @Input() price = null;
  @Input() animalType = '';
  @Input() isInCart = false;

  @Output() askIfDeleteItem: EventEmitter<ItemInterface> = new EventEmitter();

  amountInCart = 0;
  notifyAdded = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getAmountInCart();
  }

  addToCart() {
    this.cartService.addItem(this._id).subscribe(response => {
      this.notifyAdded = true;
      if (response.status === HTTP_STATUS.OK) {
        setTimeout(() => {
          this.notifyAdded = false;
        }, 500);
      }
      this.getAmountInCart();
    });
  }

  getAmountInCart() {
    this.cartService.getUserCart().subscribe(cartItems => {
      this.amountInCart = 0;
      (cartItems as Array<ItemInterface>).forEach(item => this.amountInCart = item._id === this._id ? this.amountInCart + 1 : this.amountInCart);
    });;
  }

}
