import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { homePageRoutes } from './home-page.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(homePageRoutes), SharedModule]
})
export class HomePageModule {}
