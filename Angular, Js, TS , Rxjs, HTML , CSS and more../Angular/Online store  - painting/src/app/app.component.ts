import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { trigger } from '@angular/animations';

import { animations } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fadeInOut', animations.fadeInOut)]
})
export class AppComponent {
  showNavigationMenu: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  toggleMenu() {
    setTimeout(() => {
      this.showNavigationMenu = !this.showNavigationMenu;
      this.changeDetectorRef.markForCheck();
    });
  }
}
