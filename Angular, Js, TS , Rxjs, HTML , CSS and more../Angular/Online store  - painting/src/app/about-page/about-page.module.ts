import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page.component';
import { aboutPageRoutes } from './about-page.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, RouterModule.forChild(aboutPageRoutes), SharedModule]
})
export class AboutPageModule {}
