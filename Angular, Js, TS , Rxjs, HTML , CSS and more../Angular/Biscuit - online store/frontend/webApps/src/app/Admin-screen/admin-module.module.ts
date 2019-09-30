import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild([{
      path: '', component: AdminPageComponent 
    }])
  ]
})
export class AdminModuleModule { }
