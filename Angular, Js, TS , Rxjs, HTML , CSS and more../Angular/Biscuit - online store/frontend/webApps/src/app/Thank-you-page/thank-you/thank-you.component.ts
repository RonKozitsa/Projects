import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../Shared/Services/cart.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  message
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.message = "Your request is being proccessed....";
    setTimeout(() => {
      this.message = 'Thank you for your Purchase !<br>You will be redirected to the home page';      
      setTimeout(() => {
        this.router.navigate(['/home']);
        this.cartService.clearCart().subscribe();
      }, 2500);
    }, 5000);
  }

}
