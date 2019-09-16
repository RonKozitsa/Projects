import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Auth/components/login/login.component';
import { SignupComponent } from './Auth/components/signup/signup.component';
import { HomePageComponent } from './Home/components/home-page/home-page.component';
import { AuthGuardService } from './Shared/Services/guards/auth-guard.service';
import { AboutPageComponent } from './About/about-page/about-page.component';
import { AdminGuardService } from './Shared/Services/guards/admin-guard.service';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', canActivate: [AuthGuardService] ,component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'cart', canActivate: [AuthGuardService], loadChildren: () => import('./Cart/cart.module').then(m => m.CartModule)},
  {path: 'checkout', canActivate: [AuthGuardService], loadChildren: () => import('./Checkout/checkout.module').then(m => m.CheckoutModule)},
  {path: 'admin', canActivate: [AdminGuardService], loadChildren: () => import('./Admin-screen/admin-module.module').then(m => m.AdminModuleModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
