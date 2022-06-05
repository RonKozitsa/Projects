import { Component, EventEmitter, Output } from '@angular/core';

import { NavigationItemInterface } from '../navigation/navigation.interface';
import { MainPagesNavigationNamesEnums } from '../../interfaces/pages-navigation-names.interface';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {
  @Output() navigationClicked = new EventEmitter<void>();

  navigationMenu: NavigationItemInterface[] = [
    {
      name: 'Home',
      url: MainPagesNavigationNamesEnums.home
    },
    {
      name: 'Collection',
      url: MainPagesNavigationNamesEnums.collection
    },
    {
      name: 'About Me',
      url: MainPagesNavigationNamesEnums.about
    },
    {
      name: 'Contact',
      url: MainPagesNavigationNamesEnums.contact
    }
  ];
}
