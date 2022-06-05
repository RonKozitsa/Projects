import { Routes } from '@angular/router';

import { childrenPaintings, animalPaintings, naturePaintings, flowersPaintings } from './page-items';
import { OnlineShopHomeComponent } from './online-shop-home.component';
import { OnlineShopPageComponent } from './online-shop-page/online-shop-page.component';

export const OnlineShopHomeRoutes: Routes = [
  {
    path: '',
    component: OnlineShopHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'flowers' },
      {
        path: 'flowers',
        component: OnlineShopPageComponent,
        data: flowersPaintings
      },
      {
        path: 'children',
        component: OnlineShopPageComponent,
        data: childrenPaintings
      },
      {
        path: 'animals',
        component: OnlineShopPageComponent,
        data: animalPaintings
      },
      {
        path: 'nature',
        component: OnlineShopPageComponent,
        data: naturePaintings
      }
    ]
  }
];
