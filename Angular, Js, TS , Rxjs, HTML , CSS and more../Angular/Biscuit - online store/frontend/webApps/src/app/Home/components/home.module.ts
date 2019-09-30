import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: HomePageComponent,
      pathMatch: 'full'
    }])
  ],
  exports: [HomePageComponent, RouterModule]
})
export class HomeModule { }
