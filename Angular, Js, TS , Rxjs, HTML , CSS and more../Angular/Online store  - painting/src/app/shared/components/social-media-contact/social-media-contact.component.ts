import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

import { SocialMediaContactInterface } from './social-media-contact.interface';
import { WINDOW } from '../../injection-tokens/window-token';

@Component({
  selector: 'app-social-media-contact',
  templateUrl: './social-media-contact.component.html',
  styleUrls: ['./social-media-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaContactComponent {
  configurations: SocialMediaContactInterface[];

  constructor(@Inject(WINDOW) private window: Window) {
    this.getConfigurations();
  }

  getConfigurations() {
    this.configurations = [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/leonie.fix.3',
        logo: 'facebook.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/leonie__fix/',
        logo: 'instagram.svg'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/leonie-fix-91005012b/',
        logo: 'linkedin.svg'
      }
    ];
  }

  navigateToSocialMediaPage(url: string) {
    this.window.open(url, '_blank');
  }
}
