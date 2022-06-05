import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { WINDOW } from './injection-tokens/window-token';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { ImagesGridComponent } from './components/images-grid/images-grid.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppCarouselComponent } from './components/app-carousel/app-carousel.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { StoreItemImageComponent } from './components/store-item-image/store-item-image.component';
import { ItemExpandedViewComponent } from './components/item-expanded-view/item-expanded-view.component';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { SocialMediaContactComponent } from './components/social-media-contact/social-media-contact.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { DisplayPaintingsComponent } from './components/display-paintings/display-paintings.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';

const components = [
  NavigationHeaderComponent,
  ImagesGridComponent,
  StoreItemComponent,
  NavigationComponent,
  AppCarouselComponent,
  SideMenuComponent,
  StoreItemImageComponent,
  ItemExpandedViewComponent,
  AppButtonComponent,
  SocialMediaContactComponent,
  InputTextComponent,
  DisplayPaintingsComponent,
  ClickOutsideDirective,
  ThemeControllerComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, NgbCarouselModule, FormsModule, ColorPickerModule],
  exports: components,
  providers: [{ provide: WINDOW, useValue: window }]
})
export class SharedModule {}
