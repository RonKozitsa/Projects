import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot()
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
