import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { CartPageComponent } from './components/cart-page/cart-page.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [
  CommonModule,
    SharedModule,
    NgbModalModule,
    RouterModule.forChild([
      { path: '' , component: CartPageComponent }
    ])
  ]
})
export class CartModule { }
