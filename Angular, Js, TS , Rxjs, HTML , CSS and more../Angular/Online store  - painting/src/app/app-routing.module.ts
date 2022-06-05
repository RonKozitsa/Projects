import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainPagesNavigationNamesEnums } from './shared/interfaces/pages-navigation-names.interface';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: MainPagesNavigationNamesEnums.home,
    loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: MainPagesNavigationNamesEnums.collection,
    loadChildren: () => import('./online-shop-home/online-shop-home.module').then((m) => m.OnlineShopHomeModule)
  },
  {
    path: MainPagesNavigationNamesEnums.about,
    loadChildren: () => import('./about-page/about-page.module').then((m) => m.AboutPageModule)
  },
  {
    path: MainPagesNavigationNamesEnums.contact,
    loadChildren: () => import('./contact-page/contact-page.module').then((m) => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
