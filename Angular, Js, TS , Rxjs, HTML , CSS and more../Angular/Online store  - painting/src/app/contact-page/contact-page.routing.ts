import { Routes } from '@angular/router';

import { ContactPageComponent } from './contact-page.component';

export const contactPageRoutes: Routes = [{ path: '', component: ContactPageComponent, pathMatch: 'full' }];
